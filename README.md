> This README is under creation.
---

# Netzgrafik-Editor

> This is the repository for the Netzgrafik-Editor.

![Netzgrafik-Editor](./documentation/images/Overview_Editor_Screenshot_001.PNG)

#### Table Of Contents

- [Introduction](#Introduction)
- [Origin and Open Source Collaboration](#Origin-and-Open-Source-Collaboration)
- [User Manual](#UserManual)
- [Getting Started](#Getting-Started)
- [Contributing](#Contributing)
- [Documentation](#Documentation)
- [Code of Conduct](#code-of-conduct)
- [Coding Standards](#coding-standards)
- [License](#License)

<a id="Introduction"></a>

## Introduction

The Netzgrafik-Editor is a powerful software that enables the creation, modification, and analysis
of regular-interval timetable.

<details>
<summary>
clock-faced schedules
</summary>
Regular-interval timetables were first developed in Germany at the beginning of the 20th century to 
coordinate urban traffic in large cities such as Berlin.

The regular schedules aim to increase the attractiveness of public transport because they’re easier
to memorise for passengers and because the patterns make the planning of resources easier.

Such constant schedules may also improve services during off-peak hours.

The Dutch were in 1970 credited with the first junction system, which then was the basis for the
Swiss regular-interval timetable in 1982.

![Source](https://www.swissinfo.ch/eng/to-the-second_the-swiss-timetable-is-due-to-meticulous-planning/34102496)
![History - The regular-interval timetable](https://houseofswitzerland.org/swissstories/history/nation-railway-enthusiasts-history-swiss-railways)
![clock-faced schedules](https://en.wikipedia.org/wiki/Clock-face_scheduling)
</details>

It offers various functions to enhance the efficiency and optimization of the logistics network.
Some of the key features include:

- **Interactive drawing tool to edit the Netzgrafik:** A user-friendly and interactive graphical
  editor for creating and editing the regular-interval timetables. It provides a
  visual interface to easily visualize and adjust the logistics network.

- **Graphic timetable (Streckengrafik):**
  All lines (trainruns) defined in the Netzgrafik can be transferred into a graphical timetable
  representation (Streckengrafik).

- **Perlenkette trainrun editing:** Planners can manually draw and edit the trainruns as a chain,
  allowing them
  to define crucial aspects of the logistics network and tailor it
  to specific requirements and constraints.

- **Logistical Information Extraction:** The software extracts important logistical information from
  the regular-interval timetables,
  such as departure and destination stations, departure and arrival times, and train frequency.

- **Logistics Network Analysis:** Planners can analyze the logistics network based on the timetable
  representation.
  The software provides insights into connection coordination, transfer times, and logistical
  connections, facilitating optimization and efficiency improvement.

- **Infrastructure Requirement Estimation:** Infrastructure requirements can be estimated based on
  the entered timetable representation,
  aiding in infrastructure planning and decision-making.

- **Rolling Stock Calculation:** The software calculates the required number of rolling stocks based
  on the timetable,
  supporting fleet sizing.

<a id="Origin-and-Open-Source-Collaboration"></a>

## Origin and Open Source Collaboration

The Netzgrafik-Editor, initially developed as an internal innovation project at the
*[Swiss Railways company (SBB CFF FFS)](https://www.sbb.ch)*.
The project started with a clickable prototype. From this early stage of the project,
there are still ideas and concepts that have not yet been realised, so it is always worth taking a
look [at this document](https://xd.adobe.com/view/e4664ae0-be8f-40e4-6a55-88aec9eafd8d-9257/).
The entire project has now reached a mature stage and evolved into a powerful tool with applications
beyond railways. It can now be utilized in any domain that requires regular-interval timetables as a
planning basis.

The versatility of the editor makes it suitable for various logistics planning scenarios, enabling
efficient timetable creation and analysis. The software's key features can be leveraged in a broader
context, such as:

- **Public Transportation Systems:** Other public transport networks can utilize the editor's
  flexibility and features to effectively visualize and plan their transportation systems,
  leading to improved efficiency and better services.

- **Educations:** The editor's capabilities can be utilized in educational institutions to create
  integrated timetables for classes,
  exams, and other activities, facilitating efficient scheduling and minimizing conflicts.

By extending the scope of its application beyond railways, the Netzgrafik-Editor has the potential
to become a valuable tool in numerous sectors,
providing comprehensive control, optimization, and synchronization of time-based planning.

Due to these diverse applications of the Netzgrafik-Editor and its increasing value in various
areas,
the decision was made to release it as open source software, governed by the license specified in
this
[LICENCE.md](./LICENSE.md)
document.
This is intended to promote broad use and collaboration at the planning level,
as well as actively support the further development of new ideas from different industries so that
the editor constantly improves and,
in the best case, establishes itself as a standard tool across different public transportation
industries.

Community [participation and collaboration](./CONTRIBUTING.md)
in the development process is extremely important and desired to ensure that the editor gains
diversity
and functionality and meets the needs and challenges of different application domains.
The openness of the project encourages innovation, expertise from different sectors and continuous
improvements to optimize the
planning processes.

<a id="UserManual"></a>

## User Manual

The user manual can be found here [USERMANUAL.MD](./documentation/USERMANUAL.MD)

<a id="Getting-Started"></a>

## Getting-Started

Instructions for getting started with the repository, for e.g.:

- Installation instructions
- Usage instructions

> To use this template please follow the steps as below:
>
> - If creating via Self Service Portal (WIP)
> - If Creating via GitHub Interface
    >

- Click the "Use this template" button above, select "Create a new repository"

> - Give your repository a name, and optionally a description. The owner will always be "
    SchweizerischeBundesbahnen".
    >

- Set the visibility of your repository to "Public".

> - Do not select "Include all branches".
    >

- Click the "Create repository from template" button and you're done!

<a id="Documentation"></a>

## Documentation

Links to all relevant documentation files, including:

- [DATA MODEL](./documentation/DATA_MODEL.md)
- [CODING_STANDARDS.md](CODING_STANDARDS.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE.md](LICENSE.md)

<a id="License"></a>

## License

> Choose a license that meets the organization's legal requirements and supports the sharing and
> modification of the code.
> Please follow the internal Open Source guidelines while chosing the License.
> This repository includes two [suggested license texts](./suggested_licenses) (Apache 2.0 and EPL
> 2.0). Rename the license you prefer to [LICENSE.md](LICENSE.md) and remove the other one.

This project is licensed under [INSERT LICENSE].

<a id="Contributing"></a>

## Contributing

Open-source projects thrive on collaboration and contributions from the community. To encourage
others to contribute to your project, you should provide clear guidelines on how to get involved.

This repository includes a [CONTRIBUTING.md](CONTRIBUTING.md) file that outlines how to contribute
to the project, including how to submit bug reports, feature requests, and pull requests.

<a id="coding-standards"></a>

## Coding Standards

To maintain a high level of code quality and consistency across your project, you should establish
coding standards that all contributors should follow.

This repository includes a [CODING_STANDARDS.md](CODING_STANDARDS.md) file that outlines the coding
standards that you should follow when contributing to the project.

<a id="code-of-conduct"></a>

## Code of Conduct

To ensure that your project is a welcoming and inclusive environment for all contributors, you
should establish a good [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
