# Changelog

## [2.9.7](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.6...netzgrafik-frontend-v2.9.7) (2024-11-14)


### Bug Fixes

* 350 bug delete node or trainrunsections cause low performance ([#351](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/351)) ([72f8599](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/72f859920ac425668356fcb095f2ef49f019421f))

## [2.9.6](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.5...netzgrafik-frontend-v2.9.6) (2024-11-13)


### Bug Fixes

* 346 bug importing 3rd party json misses detecting non stop transitions ([#347](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/347)) ([9d71b4a](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9d71b4aa9608eaec4d50f7f13178693305ea4a3c))

## [2.9.5](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.4...netzgrafik-frontend-v2.9.5) (2024-11-11)


### Bug Fixes

* CSV base data export  ([#343](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/343)) ([2d75f2d](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/2d75f2da23d63a87638bac8ba3f1551f54054b9c))
* Simplified third-party JSON import (no port alignment/path precalculation required) ([#341](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/341)) ([d7d1776](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/d7d1776e7bb9fd4872821d315f9a81a8c2313c4d))

## [2.9.4](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.3...netzgrafik-frontend-v2.9.4) (2024-11-06)


### Bug Fixes

* 334 bug archived read mode allows to move nodes but not persisted ([#336](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/336)) ([6275ae1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/6275ae17929fbf564b7419896ad11946b90c20b1))

## [2.9.3](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.2...netzgrafik-frontend-v2.9.3) (2024-11-05)


### Bug Fixes

* fix O/D Matrix for trainrun 0 ([#337](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/337)) ([28a6d3a](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/28a6d3ae56c436a40e06eed54a3bbc117b97bdb7))

## [2.9.2](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.1...netzgrafik-frontend-v2.9.2) (2024-11-04)


### Bug Fixes

* While combining two trainruns the first trainrun will "survive" and the second one will be deleted. If the trainrun which will be deleted consists of more than one trainrun segment (connected paths) the reported issue will be generated. (Test added) ([c55388b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/c55388b2d58efd788d64f745560c4b37c5d227e9))

## [2.9.1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.9.0...netzgrafik-frontend-v2.9.1) (2024-10-28)


### Bug Fixes

* 320 bug graphical timetable streckengrafik renders only one trainrun segement ([#325](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/325)) ([790f53b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/790f53b7f7493cc7204719643dd368eccad89d16))

## [2.9.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.8.0...netzgrafik-frontend-v2.9.0) (2024-10-24)


### Features

* migrate originDestination connectionPenalty to netzgrafikDto ([#314](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/314)) ([ce3f90d](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/ce3f90d73784fabb49f29ac3625b142ceaa4134f))
* optimize originDestination graph ([#316](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/316)) ([83895a1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/83895a153bcbc83cbbb692f48b8df196a56a9467))


### Bug Fixes

* fix O/D Matrix for unordered trainruns ([#321](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/321)) ([3d9644f](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/3d9644fbe94ea0a11a5403b798ea5634481166fa))

## [2.8.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.17...netzgrafik-frontend-v2.8.0) (2024-10-10)


### Features

* Implement Origin/Destination matrix ([#301](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/301)) ([383c99d](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/383c99d9e2081c1587bf36aa71dcb7ee6e73c7d9))

## [2.7.17](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.16...netzgrafik-frontend-v2.7.17) (2024-10-03)


### Bug Fixes

* Documentation enhanced and standalone application deployed to github pages ([#304](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/304)) ([bee16d2](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/bee16d216a980bb32fdd0e6427d90c775bcd4292))

## [2.7.16](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.15...netzgrafik-frontend-v2.7.16) (2024-09-26)


### Bug Fixes

* some translations ([#299](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/299)) ([c29c93f](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/c29c93f2e48fb294484d31e7238da637620c6e43))

## [2.7.15](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.14...netzgrafik-frontend-v2.7.15) (2024-09-19)


### Bug Fixes

* doc: Split_Combine_Trainruns.md grammar ([#293](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/293)) ([ae64d44](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/ae64d446ca979db5b95601dbd414a3c9d6e6419f))
* doc: STANDALONE.md grammar ([#292](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/292)) ([22f4f87](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/22f4f87074faa9b9a06a7b482ffb9a0d7312303d))
* doc: USERMANUAL.md spelling grammar punctuation ([#294](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/294)) ([6a402c8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/6a402c87322bac3daedadf7bc359c2875f7b31c1))

## [2.7.14](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.13...netzgrafik-frontend-v2.7.14) (2024-09-16)


### Bug Fixes

* doc: DATA_MODEL_JSON.md, spelling ([#276](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/276)) ([f504f0d](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/f504f0d40a4269fb4ab5a47ce6797e43c1564d32))
* doc: Graphic_Timetable.md, spelling, grammar ([#277](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/277)) ([853b80f](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/853b80fa30b4e2119a919787f2b22bd4f4ac2600))

## [2.7.13](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.12...netzgrafik-frontend-v2.7.13) (2024-08-29)


### Bug Fixes

* Bug archived read only mode variants are editable even tho not persisted ([#257](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/257)) ([9472a89](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9472a89c445e3473877e7fe80add5f5e3cc37863))

## [2.7.12](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.11...netzgrafik-frontend-v2.7.12) (2024-08-29)


### Bug Fixes

* Technical improvement: replace hard-coded styles with CSS class for sbb-icon-sidebar-container. This improves maintainability and reusability of styles. ([#273](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/273)) ([b505d03](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/b505d03f4296809fe5e53c7ad216ca006bb234cc))

## [2.7.11](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.10...netzgrafik-frontend-v2.7.11) (2024-08-28)


### Bug Fixes

* doc: CREATE_TRAINRUN.md, spelling, grammar ([#267](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/267)) ([a9e1747](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/a9e1747f7b9dcdb4c5cee2a3e52be7426b526ad4))

## [2.7.10](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.9...netzgrafik-frontend-v2.7.10) (2024-08-26)


### Bug Fixes

* Update de.json, en.jason, spelling ([#259](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/259)) ([a166d83](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/a166d83a4689864410715949da01df04524e3d26))

## [2.7.9](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.8...netzgrafik-frontend-v2.7.9) (2024-08-26)


### Bug Fixes

* doc: CREATE_NODES.md, spelling ([#264](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/264)) ([30cf1d7](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/30cf1d73dda29cb153fd04354c2ec1bb912b1758))

## [2.7.8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.7...netzgrafik-frontend-v2.7.8) (2024-08-24)


### Bug Fixes

* doc: Update CREATE_FILTERS.md, spelling ([#258](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/258)) ([e0eb559](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e0eb5592b3e0a9cd25f74ffacfe411b4f73d1369))

## [2.7.7](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.6...netzgrafik-frontend-v2.7.7) (2024-08-20)

### Bug Fixes
* Long email addresses cause incorrect formatting of the left sidebar change history ([#243](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/243)) ([dd0fda5](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/dd0fda51f8ada14e340ae6e821e153aeac42ad7a))
* Viewport Not Centering on Bounding Box When Reloading/Opening Netzgrafik ([#244](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/244)) ([9e5e2fd](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9e5e2fdf85ff2c8eec9a568c2af656744f0d69af))
* Translation is not working for variant when archived ([#249](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/249)) ([e313580](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e3135804cf93a47a35162ab82554507d9e8b3403))
* The menubar has a visual "thick" separator in between variant/project name and the filter symbol ([#252](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/252)) ([3496d0a](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/3496d0a2dcb7b960d14c49e15abcfd2034f65d99))

## [2.7.6](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.5...netzgrafik-frontend-v2.7.6) (2024-08-19)


### Bug Fixes

* use change event instead of keyup for node name change ([#248](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/248)) ([1e1177b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/1e1177b3f382f10e36deb8f9080b6c58522a43bc))

## [2.7.5](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.4...netzgrafik-frontend-v2.7.5) (2024-08-08)


### Features

* add AppComponent inputs/outputs ([#166](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/166)) ([9d2c6ee](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9d2c6eee74f94912b68ec8b3375dc53e21a5ecdc))
* introduce standalone mode ([#162](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/162)) ([cc4c56b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/cc4c56b25aa2d978ebd70fbf34dc129f36b776b2))
* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))
* publish package on NPM ([#172](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/172)) ([1692d55](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/1692d5561f8e1fd8b00a60b673b7567d81d83aef))


### Bug Fixes

* align theme color picker with buttons ([#198](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/198)) ([e3a8798](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e3a87989ea28a04a4a0bb9cee825825bb1b97d7b))
* disable environment header in standalone mode ([#230](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/230)) ([e25887e](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e25887eb11ab36ce84756e92344bc63cdeb9b1a4))
* disable links section in node sidebar ([2554094](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/255409410aa2552dfc1155bf89e7afce78dc17bc))
* disable notes in filter sidebar in standalone mode ([#211](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/211)) ([df335ef](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/df335ef9aede8c47064655f3dbcc5723c2a89f1a))
* enable output hashing by default ([#174](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/174)) ([8ac67b8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/8ac67b807db1e0fc418d4bacddabfabcb80620f4))
* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))
* use light theme for sbb-esta ([#176](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/176)) ([89aaae0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89aaae004170b59649b0856f14de1d31e86a6e18))


### Miscellaneous Chores

* release 2.5.0 ([00e6836](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/00e68365b1401d0af211cf6f9cd3184ed61fa102))
* release 2.7.3 ([f06b8ff](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/f06b8ff117a30c4ed0a2084c6a75dfd4e72d254b))
* release 2.7.3 ([484e008](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/484e0081b69b59c0f41857bab66ac8b024d95e86))
* release 2.7.5 ([f69edec](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/f69edecca48480cd1f4483cd8d9b655ef7cfd512))

## [2.7.4](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.7.3...v2.7.4) (2024-08-08)


### Bug Fixes

* disable environment header in standalone mode ([#230](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/230)) ([e25887e](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e25887eb11ab36ce84756e92344bc63cdeb9b1a4))

## [2.7.3](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.7.2...v2.7.3) (2024-08-06)


### Features

* add AppComponent inputs/outputs ([#166](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/166)) ([9d2c6ee](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9d2c6eee74f94912b68ec8b3375dc53e21a5ecdc))
* introduce standalone mode ([#162](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/162)) ([cc4c56b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/cc4c56b25aa2d978ebd70fbf34dc129f36b776b2))
* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))
* publish package on NPM ([#172](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/172)) ([1692d55](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/1692d5561f8e1fd8b00a60b673b7567d81d83aef))


### Bug Fixes

* align theme color picker with buttons ([#198](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/198)) ([e3a8798](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e3a87989ea28a04a4a0bb9cee825825bb1b97d7b))
* disable links section in node sidebar ([2554094](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/255409410aa2552dfc1155bf89e7afce78dc17bc))
* disable notes in filter sidebar in standalone mode ([#211](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/211)) ([df335ef](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/df335ef9aede8c47064655f3dbcc5723c2a89f1a))
* enable output hashing by default ([#174](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/174)) ([8ac67b8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/8ac67b807db1e0fc418d4bacddabfabcb80620f4))
* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))
* use light theme for sbb-esta ([#176](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/176)) ([89aaae0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89aaae004170b59649b0856f14de1d31e86a6e18))


### Miscellaneous Chores

* release 2.5.0 ([00e6836](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/00e68365b1401d0af211cf6f9cd3184ed61fa102))
* release 2.7.3 ([f06b8ff](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/f06b8ff117a30c4ed0a2084c6a75dfd4e72d254b))
* release 2.7.3 ([484e008](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/484e0081b69b59c0f41857bab66ac8b024d95e86))

## [2.7.2](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.2...netzgrafik-frontend-v2.7.2) (2024-08-06)


### Bug Fixes

* disable notes in filter sidebar in standalone mode ([#211](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/211)) ([df335ef](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/df335ef9aede8c47064655f3dbcc5723c2a89f1a))

## [2.7.2](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/netzgrafik-frontend-v2.7.2...netzgrafik-frontend-v2.7.2) (2024-08-06)


### Bug Fixes

* disable notes in filter sidebar in standalone mode ([#211](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/211)) ([df335ef](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/df335ef9aede8c47064655f3dbcc5723c2a89f1a))

## 2.7.2 (2024-08-06)


### Features

* add AppComponent inputs/outputs ([#166](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/166)) ([9d2c6ee](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9d2c6eee74f94912b68ec8b3375dc53e21a5ecdc))
* introduce standalone mode ([#162](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/162)) ([cc4c56b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/cc4c56b25aa2d978ebd70fbf34dc129f36b776b2))
* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))
* publish package on NPM ([#172](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/172)) ([1692d55](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/1692d5561f8e1fd8b00a60b673b7567d81d83aef))


### Bug Fixes

* align theme color picker with buttons ([#198](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/198)) ([e3a8798](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e3a87989ea28a04a4a0bb9cee825825bb1b97d7b))
* enable output hashing by default ([#174](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/174)) ([8ac67b8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/8ac67b807db1e0fc418d4bacddabfabcb80620f4))
* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))
* use light theme for sbb-esta ([#176](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/176)) ([89aaae0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89aaae004170b59649b0856f14de1d31e86a6e18))


### Miscellaneous Chores

* release 2.5.0 ([00e6836](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/00e68365b1401d0af211cf6f9cd3184ed61fa102))

## 2.7.1 Manually edited version number (preparation automatic release building)


### Bug Fixes

* align theme color picker with buttons ([#198](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/198)) ([e3a8798](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/e3a87989ea28a04a4a0bb9cee825825bb1b97d7b))

## [2.6.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.5.0...v2.6.0) (2024-07-22)


### Features

* add AppComponent inputs/outputs ([#166](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/166)) ([9d2c6ee](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/9d2c6eee74f94912b68ec8b3375dc53e21a5ecdc))
* introduce standalone mode ([#162](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/162)) ([cc4c56b](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/cc4c56b25aa2d978ebd70fbf34dc129f36b776b2))
* publish package on NPM ([#172](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/172)) ([1692d55](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/1692d5561f8e1fd8b00a60b673b7567d81d83aef))


### Bug Fixes

* enable output hashing by default ([#174](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/174)) ([8ac67b8](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/8ac67b807db1e0fc418d4bacddabfabcb80620f4))
* use light theme for sbb-esta ([#176](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/176)) ([89aaae0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89aaae004170b59649b0856f14de1d31e86a6e18))

## [2.5.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.5.0...v2.5.0) (2024-04-22)


### Features

* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))


### Bug Fixes

* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))


### Miscellaneous Chores

* release 2.5.0 ([00e6836](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/00e68365b1401d0af211cf6f9cd3184ed61fa102))

## [2.5.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.5.0...v2.5.0) (2024-04-22)


### Features

* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))


### Bug Fixes

* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))


### Miscellaneous Chores

* release 2.5.0 ([00e6836](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/00e68365b1401d0af211cf6f9cd3184ed61fa102))

## [2.5.0](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/compare/v2.4.0...v2.5.0) (2024-04-15)


### Features

* **pr-template:** add pull request template ([89b4d61](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/89b4d61954382c45ffd20ac54137d1faf2f0c5f9))


### Bug Fixes

* issue I. + typo ([#72](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/72)) ([deb7cd1](https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/commit/deb7cd1514a320ca14d53bdd26cdbdeff6005c79))
