# Contributing
> **Note:** This is a template for Contributing.md. Please make necessary changes in the links and content and modify the template as per your needs. 

We appreciate all kinds of contributions. The following is a set of guidelines for contributing to this repository on GitHub. 
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[I just have a question!](#i-just-have-a-question)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
* [Tools and Packages](#tools-and-packages)
* [Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
* [Issues and Bugs](#issue)
* [Feature Requests](#feature)
* [Pull Requests Guidelines](#submit-pr)
* [Your First Code Contribution](#your-first-code-contribution)
* [Coding Rules](#rules)
* [Commit Message Guidelines](#commit)

<a id="code-of-conduct"></a>
## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). 
By participating, you are expected to uphold this code.

<a id="i-just-have-a-question"></a>
## I just have a question!

Please ask the questions in the discussions page.

* [Github Discussions, the official message board](https://github.com/SchweizerischeBundesbahnen/open-source-repo-template/discussions)

## <a id="what-should-i-know-before-i-get-started"></a> What should I know before I get started?

### <a id="tools-and-packages"></a> Tools and Packages
Information or links about the tools and packages that need to be used.
### <a id="design-decisions"></a> Design Decisions
Information or links about the Design Decisions or Design Architecture.

## <a id="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/SchweizerischeBundesbahnen/open-source-repo-template/issues/new). Including an issue
reproduction (via StackBlitz, JsBin, Plunkr, etc.) is the absolute best way to help the team quickly
diagnose the problem. Screenshots are also helpful.

You can help the team even more and [submit a Pull Request](#submit-pr) with a fix.


## <a id="feature"></a> Want a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue)
to our [GitHub Repository](https://github.com/SchweizerischeBundesbahnen/open-source-repo-template/issues/new).
If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
  discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
  and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).


### <a id="submit-issue"></a> Submitting an Issue
If your issue appears to be a bug, and hasn't been reported, open a new issue.
Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Toolchain and Environment Details** - which versions of libraries, toolchain, platform etc 
* **Motivation for or Use Case** - explain what are you trying to do and why the current behavior
  is a bug for you
* **Browsers and Operating System** - is this a problem with all browsers?
* **Reproduce the Error** - provide a live example (using StackBlitz or similar) or a unambiguous set of steps
* **Screenshots** - myybe screenshots can help the team
  triage issues far more quickly than a text description.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

You can file new issues by providing the above information [here](https://github.com/SchweizerischeBundesbahnen/open-source-repo-template/issues/new).


### <a id="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch main
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Test your changes with our supported browsers and screen readers.
* Run tests and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push my-fork my-fix-branch
    ```

* In GitHub, send a pull request to `sbb-your-project:main`.
  The PR title and message should as well conform to the [commit message conventions](#commit).

## <a id="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.
* Also see [CODING_STANDARDS](./CODING_STANDARDS.md)

## <a id="commit"></a> Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to generate the changelog.
As an example, please refer to: https://github.com/sbb-design-systems/sbb-angular 

<a id="your-first-code-contribution"></a>
## Your First Code Contribution

Unsure where to begin contributing to Atom? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

## Attribution

This CONTRIBUTING guideline is adapted from the [sbb-design-systems/sbb-angular](https://github.com/sbb-design-systems/sbb-angular)