{
  description = "A flake for a TypeScript project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs
    , flake-utils
    , ...
    }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
      };
      node = pkgs.nodejs_20;
      nodePackages = pkgs.nodePackages.override {
        nodejs = node;
      };
      angularLanguageServer = pkgs.angular-language-server;
    in
    {
      devShell = pkgs.mkShell {
        buildInputs = [
          node
          nodePackages.npm
          nodePackages.typescript
          nodePackages.typescript-language-server
          angularLanguageServer
        ];
      };
    });
}
