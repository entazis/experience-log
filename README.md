# Bence Szabó

Tech Lead & Full-Stack Engineer | 7+ Years Building Scalable Systems | Team Leadership & AI-Enhanced Development Workflows

## Table of Contents

- [About](#about)
- [Experience](#experience)
- [Education](#education)
- [Certifications](#certifications)
- [How I Work](#how-i-work)
- [Volunteering](#volunteering)
- [Projects](#projects)

## About

I am a senior software engineer and tech lead with 7+ years of experience building and evolving complex, distributed systems in high-growth environments. My work sits at the intersection of architecture, delivery, and team effectiveness — especially in situations where requirements are unclear, systems are already in motion, and decisions have long-term consequences.

Over the past years, I have increasingly operated in ambiguous problem spaces: defining technical direction, making explicit trade-offs, and taking ownership of outcomes beyond individual features or services. I focus on reducing unnecessary complexity, establishing strong foundations, and enabling teams to move faster without sacrificing reliability or clarity.

My core strengths are backend systems, DevOps automation, and designing architectures that remain understandable as they scale. I am particularly interested in developer experience, system ergonomics, and using AI-assisted workflows to amplify human judgment rather than replace it

## Experience

### [BeamLive](https://beam.live)

#### 2025.01 - Present: Tech Lead

I lead backend architecture and technical direction for BeamLive’s core platform, with responsibility spanning system design, delivery quality, and team alignment.

**Key responsibilities and impact:**

- Owned the technical definition of the v3.0 roadmap, including permission model redesign, schema lifecycle strategy, and service boundary decisions.
- Led the transition to a unified core monorepo, migrating 15+ repositories while preserving full history (6,600+ commits).
- Designed and implemented dynamic model loading with runtime JSON schema generation, enabling automated index, trigger, and validation creation.
- Architected the separation of core domain services (C-BDS) and Redis-backed schema-less services (R-BDS), improving flexibility and long-term maintainability.
- Introduced a multi-layer permission system (path-, endpoint-, and app-level), resolving long-standing access control limitations.
- Established standardized deployment protocols, technical and security review gates, and improved production reliability.
- Built and customized MCP (Model Context Protocol) servers to enable safe, structured AI-agent interaction with backend services.
- Systematically introduced AI-assisted development workflows, achieving ~5× productivity gains in large-scale migrations and refactoring.

**Team leadership and collaboration:**

- Managed and mentored a distributed team of backend and frontend engineers.
- Ran weekly technical alignment meetings and daily async stand-ups.
- Acted as the primary technical counterpart for leadership, translating architectural risks and trade-offs into actionable decisions.
- Introduced request-shaping and prioritization practices to avoid reactive, low-impact work.
- Mediated technical and interpersonal conflicts to maintain delivery focus and team trust.

**Skills:** Leadership · Architecture · Microservices · NestJS · TypeScript · Redis · AI Agents · MCP · CI/CD

#### 2022.02 - 2024.12: Senior Software Engineer

As a senior engineer, I focused on scaling the platform’s backend architecture while improving reliability, performance, and developer experience.

- Designed and built low-latency APIs in Node.js and TypeScript, reducing response times by up to 40%.
- Led the evolution from PostgreSQL/HTTP-based workflows to Redis- and MQTT-based architectures for real-time use cases.
- Designed and implemented a nano-service engine and editor, enabling customer-specific workflows without downtime.
- Built a comprehensive integration testing framework and CI pipelines, increasing test coverage by ~70%.
- Implemented database replication, sharding strategies, and dynamic indexing.

**Skills:** NestJS · TypeScript · Redis · MQTT · Jest · Microservices · Multi-Tenant Systems

#### 2020.08 - 2022.01: Full Stack Software Developer & Product Owner

- Shipped and evolved administrative platforms used by internal teams and customers.
- Initiated system redesigns to improve scalability and long-term maintainability.
- Reduced codebase complexity through shared core components and architectural refactors.

**Skills:** NestJS · TypeScript · MongoDB · PostgreSQL · Redis · Angular · React

### [CodeBerry Programming School](https://codeberryschool.com/)

#### 2018 - 2020: Software Developer / Data Analyst / Mentor

- Built and maintained web applications, landing pages, payment flows, and internal tools.
- Developed data dashboards, analytics pipelines, and AARRR-based growth metrics.
- Implemented gamification systems and automated communication workflows.
- Mentored students and junior developers in practical web development.

**Skills:** Node.js · MongoDB · GraphQL · React · Data Analytics · Google Analytics

#### 2017 - 2018: Data Scientist Intern and Machine Learning Engineer

- Developed predictive machine learning models focused on customer churn prediction, contributing to customer retention strategies.
- Conducted correlation analysis to uncover meaningful relationships within data, driving business insights.

**Skills:** Machine Learning · Node.js · MongoDB · Data Analytics · R · Artificial Intelligence (AI)

## Education

### [Budapest University of Technology and Economics](https://vik.bme.hu/en/)

- MSc, Electrical Engineering — Computer-Based Systems (2016–2018)
- BSc, Electrical Engineering — Computer-Based Systems (2012–2015)

## Certifications

- AWS Certified Solutions Architect – Associate *(Course Completed, 2024)*
- Ethical Hacking From Scratch - zSecurity
- Go: The Complete Developer's Guide
- Deep Learning & Neural Networks - DeepLearning.AI

## How I Work

- I optimize for long-term clarity, not short-term speed.
- I prefer making trade-offs explicit rather than letting complexity accumulate silently.
- I believe strong systems come from good constraints, not unlimited flexibility.
- I use AI as an amplifier for human judgment, not a replacement for it.
- I regularly revisit and adjust my principles based on real outcomes, not theory.

## Volunteering

### Invisible University

- Chief Executive Officer (2019–2022)
- Organizational Development Consultant & Team Lead
- Nonviolent Communication Specialist
- Trainer of Trainers

Focused on organizational development, leadership training, communication, and personal effectiveness.

## Projects

### 2025.11 – 2026.01: Core v3.0 Architecture & Permission System

**Project Overview:**
Defined and implemented foundational architectural changes for the next major platform version, focusing on permissions, schema lifecycle, and service boundaries.

**Key Contributions:**

- Designed a hierarchical permission system covering data paths, endpoints, and applications.
- Split core responsibilities into domain-focused services (core-bds vs core-app).
- Refactored schema access using strategy patterns (MQTT vs direct Redis).
- Eliminated obsolete services to reduce operational and cognitive complexity.

**Outcome:** Improved platform security, reduced architectural coupling, and established a scalable foundation for future product evolution.

**Skills:** Architecture Design · Access Control · NestJS · Redis · TypeScript · Strategy Pattern

### 2025.10 – 2025.12: Dynamic Schema Lifecycle & Index Management

**Project Overview:** Reworked how schemas are loaded, validated, indexed, and evolved at runtime across partitions.

**Key Contributions:**

- Implemented dynamic schema loading per partition.
- Automated index and trigger generation directly from data model schemas.
- Enabled schema-change reinitialization flows with full test coverage.
- Introduced temporary and dynamically matched indices based on query analysis.

**Outcome:** Significantly reduced manual schema maintenance while improving query performance and correctness.

**Skills:** JSON Schema · Dynamic Indexing · Redis · Data Modeling · Testing Automation

### 2025.09 – 2025.11: MCP Server Customization & AI Tooling Integration

**Project Overview:** Extended Model Context Protocol (MCP) tooling to better match internal development workflows and system architecture.

**Key Contributions:**

- Built a custom MCP implementation tailored to internal service patterns.
- Exposed structured endpoint metadata (schemas, descriptions, I/O contracts).
- Enabled AI agents to safely interact with live core services.
- Standardized AI-agent documentation and usage rules.

**Outcome:** Established a reliable foundation for AI-assisted development beyond experimentation.

**Skills:** MCP · AI Tooling · API Design · Developer Experience · Automation

### 2025.08 – 2025.10: CI, Testing, and Developer Ergonomics Hardening

**Project Overview:** Strengthened development reliability by addressing systemic testing and workflow issues introduced during large-scale migrations.

**Key Contributions:**

- Repaired broken test suites across multiple services.
- Added debug launch configurations for faster test iteration.
- Enforced formatting and commit standards via git hooks.
- Reduced bootstrap time and noise through parallel initialization.

**Outcome:** Restored trust in automated testing and improved day-to-day developer efficiency.

**Skills:** CI/CD · Jest · Git Hooks · Developer Tooling · Debugging

### 2025.09: Deployment Protocol & Security Hardening

Unified all repositories under BeamLive GitHub organization and established robust deployment practices:

- Designed comprehensive deployment policy with review and staging process.
- Introduced technical and security reviews before production deployments.
- Established clear guidelines for code quality and security standards.

**Outcome:** Enhanced system security and deployment reliability through standardized processes and comprehensive review procedures.

**Skills:** DevOps · Security · CI/CD · Release Management · GitHub · Policy Design

### 2025.08: MCP Server Integration

Deployed Model-Context Protocol servers to enable AI agents to interact with core services:

- Integrated MCP servers with existing infrastructure.
- Experimented with autonomous agents for testing and development tasks.
- Enabled AI-driven automation for routine development operations.

**Outcome:** Successfully created a foundation for AI-assisted development workflows and autonomous testing capabilities.

**Skills:** AI Agents · MCP · API Integration · Automation · Protocol Design

### 2025.07 - 2025.10: Dynamic Model Loading & Schema Generation

**Project Overview:**  
Developed a runtime schema system for Beam’s dynamic data models, unifying metadata and automating schema management.

**Key Contributions:**

- Merged all entity model types into a unified schema with metadata.
- Implemented runtime JSON Schema generation and dynamic loading from configuration databases.
- Automated database index, trigger, and validation schema generation.

**Outcome:**
Drastically reduced schema maintenance time and improved consistency across services.

**Skills:** JSON Schema · Runtime Validation · NestJS · TypeScript · Automation · Database Indexing · Schema Design · Redis · Metadata Management

### 2025.07 - 2025.09: Monorepo & DevOps Ecosystem

Consolidated 15+ repositories into a single Core Monorepo:

- Migrated 6,674 commits with full version history, preserving complete development timeline.
- Achieved 5x productivity increase in code migration and refactoring through systematic use of AI agents.
- Split structure into core services, packages, and apps with clear separation of concerns.
- Introduced Prometheus monitoring for comprehensive system observability.
- Added AI AGENTS.md documentation for AI-assisted development and MCP server integration.

**Outcome:** Simplified maintenance, unified development workflow, and dramatically improved developer productivity through consolidated codebase.

**Skills:** Monorepo · DevOps · Prometheus · AI Agents · NestJS · TypeScript · GitHub Actions · CI/CD

### 2025.03 - 2025.08: v2.2 Migration & System Stabilization

**Project Overview:**  
Directed a large-scale migration project to enhance scalability, testing, and deployment consistency.

**Key Contributions:**

- Oversaw multiple service migrations and refactors (common, connector, page-messaging, authenticator, notification, CUDB).
- Introduced testing framework and debug tools across all services.
- Created 20+ integration tests per service, significantly improving code reliability.
- Set deployment protocols and security review policies.
- Established AI-assisted development guidelines and daily tech team stand-ups.

**Outcome:** Successfully migrated all core services to v2.2 with improved stability, test coverage, and development processes.

**Skills:** Microservices · NestJS · Redis · CI/CD · Testing Automation · Integration Testing · Jest

### 2025.02 - 2025.10: AI-Assisted Development & Team Management

**Project Overview:**  
Integrated AI tools into daily workflows, enabling automated code review and refactoring.

**Key Contributions:**

- Managed a distributed tech team of 5 developers.
- Set up Cursor subscriptions, AI tools budget, and rules for AI agents.
- Implemented AI-driven code review processes and automated debugging workflows.
- Mentored developers in AI-assisted development practices.
- Led shaping meetings and wrote technical reports to stakeholders.

**Outcome:**
Dramatically improved team productivity and code quality through systematic AI integration and effective remote team management.

**Skills:** Leadership · AI Tooling · Remote Team Management · Process Automation · Mentorship · Code Review

### 2024.03 - 2024.10: CI/CD and Tests

Project Overview: This project focused on establishing a Continuous Integration and Continuous Deployment (CI/CD) pipeline to streamline development and deployment processes.

Created a proof of concept for the CI/CD flow, set up GitHub workflows and configurations to automate several tasks on every pull request (PR):

- Set up and run a Redis database.
- Set up and run an MQTT broker.
- Build the repository.
- Run the application.
- Execute integration tests.

Testing Framework

- Previously, all tests were conducted manually.
- Advocated for a shift towards automated testing, despite resistance from management.
- Developed a framework and tools for creating integration tests, incorporating the MQTT request/response concept.
- Integrated these tests into the CI flow, ensuring comprehensive and automated validation of services.

By automating these processes and establishing a robust testing framework, the project significantly improved the efficiency and reliability of the development and deployment workflow.

**Skills:** Integration Testing · Jest · GitHub · Redis

### 2022.11 - 2024.10: Live 2.2

Project Overview: This project involved the comprehensive restructuring and enhancement of a software platform to improve performance, scalability, and developer collaboration. The initiative focused on managing custom client logic through nano-services and transitioning to a more efficient data management system.

Technical Enhancements:

- Transitioned from Postgres to Redis for enhanced speed and user experience.
- Utilized JSON schema for validating data structures specific to various organizations.
- Developed a multi-tenant architecture to handle functions per request per customer.
- Created development tools for custom feature functions and a testing tool for automatic service validation.

Team Collaboration and Management:

- Mediated conflicts between management and development teams, as well as among developers, to foster effective teamwork.
- Participated in interviews and onboarding processes for new team members.
- Mentored junior developers, particularly those involved in the admin platform, ensuring a smooth takeover of responsibilities.
- Managed 25-30 repositories, overseeing their versions and coordinating tasks for refactoring and updating the product.

Project Leadership and Strategy:

- Held discussions with the CEO regarding resource needs for expansion.
- Took responsibility for all backend-related services, setting development conventions, and creating tools to support these services.
- Engaged in system design and architectural decisions to ensure the platform's robustness and scalability.

Through these efforts, the project not only enhanced the technical infrastructure of the platform but also improved team dynamics and streamlined development processes, setting a strong foundation for future growth and scalability.

**Skills:** NestJS · Redis · TypeScript · Multi-Tenant Management · JSON Schema · B2B2C · Microservices

### 2022.04 - 2024.03: Evolution of Location Service and Geofence Management

The project started with the development of a central location base storage (CLBS) system to manage IoT device location data. Initially, locations were stored as GeoJSON in MongoDB, transmitted via HTTP, and retrieved by clients to display on maps. This setup was inefficient for real-time tracking and lacked advanced geofencing features.

Key Milestones

1. Introduction of Central Location Service

   - Locations were stored in Redis with geo hashes for geospatial searches.
   - Data was managed as GeoJSON features, but handling multiple sources was complex and error-prone.
   - Limitations included inefficient queries, lack of polygon support, and absence of real-time geofence event generation.

2. Refactoring for Real-Time Efficiency

   - A new service decoupled location processing, improving scalability.
   - RediSearch enabled JSON-based queries with polygon support.
   - Tile38, a specialized geospatial database, was integrated for real-time geofencing, alerts, and MQTT-based triggers.

3. Optimization and Simplification
   - Redundant data storage was replaced by meta indices, reducing overhead.
   - Geofence management was transitioned to Tile38, enabling efficient dynamic geofences like real-time bus tracking.
   - Legacy systems, including MongoDB and Redis-based geoqueries, were phased out.

Key Achievements

- Real-Time Processing: Direct device-to-service communication enhanced speed.
- Scalable Geofence Management: Tile38 supported advanced geospatial queries and dynamic geofences.
- Simplified Architecture: Eliminated legacy dependencies and redundant data handling.
- Stateful Geofences: Partial implementation of time-based conditions for geofence states using scheduled tasks.

**Outcome:**
This evolution transformed the location service into a robust, real-time solution capable of supporting complex IoT ecosystems and advanced geofencing requirements.

**Skills:** Node.js · NestJS · Redis · Tile38 · Geofencing · MQTT · GeoJSON

### 2023.11 - 2024.01: Horizontal Scaling

Project Overview: This project aimed to enhance the scalability of services through horizontal scaling, achieved in two main phases with distinct approaches.

First Version - The initial approach involved:

- Implementing message queues (using npm bull) between the controller and service layers.
- Splitting all applications into separate controllers and services.
- Setting up queues between these two parts, effectively doubling the number of running application instances.

Second Version - The second phase simplified the architecture by:

- Dropping the concept of running separate controllers and services.
- Using MQTT directly for load balancing, utilizing shared subscriptions of MQTT v5.
- Simplifying the codebase significantly.
- Employing the round-robin algorithm as the sole method for load balancing.

**Skills:** Message Queue · MQTT · Load Balancing

### 2023.04 - 2023.07: Client Code Reduction

Project Overview: This project aimed to standardize the programming language across all services to enhance efficiency and maintainability. Initially, various services were written in plain JavaScript, which led to inconsistent data structures and interfaces.

Transition to TypeScript: By transitioning all services to TypeScript, the project introduced a more robust development environment that allowed for better design of data structures and interfaces, enabling a form of test-driven development. Type definitions were created and shared between the server and client using a common model types npm package, ensuring consistency across different parts of the application.

Migration to React Native: Given budget constraints, which precluded hiring separate developers for JavaScript, Java (Android), and Swift (iOS), the project explored migrating to React Native. This approach aimed to unify the technology stack (server, database, browser, and mobile clients) under TypeScript. The proof of concept for React Native demonstrated the potential to speed up development by sharing code across different platforms and reducing the need for a large team of specialized developers.

**Skills:** React · npm · JavaScript · TypeScript

### 2023.01 - 2023.06: Programmable Admin Platform

Project Summary:

- Admin Client: A thin React client that loads configuration from the server to create the admin editors.
- Admin Editors: A set of editors to edit data from different databases.
- Configuration Database: Editor- and nano-service configurations, are stored here.
- Nano-services: Each editor creates a new workflow (nano-service) that communicates in real-time with its editor.
- UI Modifications: Workflow (nano-service) on the backend can modify the UI by sending requests.
- Actions: A nano-service mechanism called action is running on the React side.
- Nano-Service Editor: Configurations, workflows, and actions can be created, tested, and debugged here.

**Skills:** React · Redis · MQTT · TypeScript · NestJS

### 2022.08 - 2023.02: Nano-Service Engine and Editor

Project Overview: The project focuses on improving the workflow development strategy for Beam, a platform designed to enable cooperation between organizations, users, and IoT devices within a B2B2C model. Beam aims to provide core services through a chat-based application, leveraging business logic to connect various stakeholders. However, there are challenges and critiques around the previous workflow design, primarily concerning its understandability and effectiveness for developers.

Situation: Beam's strategy is not to develop applications itself but rather to offer services to third-party developers and end-user organizations. Currently, Beam is developing an application to test core functionalities and showcase platform capabilities. There is internal debate about the platform's construction, with differing views on whether to use an SDK or API-based approach for third-party development. The applications currently in use are not sufficiently generalized to meet varying customer requirements, necessitating a more adaptable solution.

Challenges and Concerns:

1. The complexity and limited control of the previous workflow design.
2. The architecture is difficult for even in-house developers to understand, leading to suboptimal solutions.
3. The existing development and debugging tools for workflows are seen as less effective compared to traditional IDE toolchains.

Achievements and Future Proposals:

1. Separation of core backend functions and business logic through workflows.
2. Development of a web editor and actionflow logic for managing application and organization-specific UI scripts.
3. Introduction of TypeScript (TS) support in the workflow and actionflow IDE.
4. Testing and performance improvements for the workflow server, enabling the management of thousands of active workflows.

**Skills:** Microservices · NestJS · Redis · TypeScript

### 2021.11 - 2022.11: Live 2.0

Refactoring and Modularization: The project began by separating the responsibilities of each microservice to ensure efficient and scalable development. Responsibilities were divided so that each database was accessed and managed by a single service, removing global database queries. Additionally, the logical layers within each microservice were separated into controller, service, core, and database layers.

Transition to Microservices: Following a comprehensive redesign of the product, the previous monolithic structure was replaced with a microservices architecture. NestJS was chosen for running these microservices, providing a cohesive and scalable structure for backend services. The adoption of a microservices approach allowed for modular and independent deployment of services, enhancing system resilience and flexibility.

Modernization Efforts: In collaboration with a seasoned system architect, the project aimed to modernize the technology stack and optimize service delivery. TypeORM was leveraged for seamless data management and object-relational mapping, while React and TypeScript were used to develop robust client-side applications.

Server-Side and Backend Improvements: The server-side development was powered by NestJS, offering a rich ecosystem for building scalable applications. The backend was orchestrated on the Node.js runtime, known for its non-blocking, event-driven architecture, ensuring the system could handle high-throughput requirements effectively.

**Skills:** Microservices · TypeORM · NestJS · Node.js · React · PostgreSQL · TypeScript

### 2021.09 - 2022.09: Scalable Multi-Tenant Service for a B2B2C Company

The project addressed a critical scalability issue in a B2B2C company, which initially created a separate repository for every customer. This approach led to exponential increases in development, maintenance, and deployment times, making it unsustainable.

Problem:

- Each new customer required a dedicated repository.
- Growing complexity slowed development and deployment.
- Maintenance became increasingly resource-intensive.

Solution:
A multi-tenant architecture was implemented to enable multiple customers to use a single service while maintaining distinct setups. Key steps included:

1. Initial Multi-Tenant Attempt
   - Explored NestJs multi-tenancy, which created new service objects per request.
   - While functional, this approach led to high RAM usage and slower response times.
2. Optimized Multi-Tenant Design
   - Preloaded all customer configurations during service startup.
   - Clients specified their customer ID in MQTT request topics to enable tailored setups.
   - This reduced resource usage and improved response times.
3. Custom Business Logic for Customers
   - Developed a "nano-service" engine and editor to create, store, and assign workflows.
   - Allowed customers to have unique workflows within the same shared service.

Key Achievements:

- Scalability: A single multi-tenant service replaced individual customer repositories.
- Performance: Preloaded configurations and streamlined MQTT communication reduced response times.
- Flexibility: The nano-service engine enabled customer-specific workflows without duplicating services.
- Efficiency: Maintenance and deployment times were significantly reduced.

**Outcome:**
The project delivered a scalable, efficient multi-tenant architecture, dramatically improving speed and operational efficiency while enabling customized workflows for diverse customer needs.

**Skills:** NestJS · MQTT · Microservices · Multi-Tenant Management · TypeScript · Redis · PostgreSQL

### 2021.11 - 2022.06: Central User Database

Project Overview: This project aimed to address the issues of data redundancy and disorganization in the previous system. The original setup suffered from inefficient storage utilization due to multiple databases managed by different services, which were not coherently designed. To resolve these issues, the project focused on restructuring the user data architecture and transitioning from MongoDB to PostgreSQL, and eventually to Redis, for enhanced efficiency.

Challenges and Solutions: The redundancy in user data was introduced during the initial version of the system, where data was dispersed across multiple databases. The main goal was to centralize this user data into a single, centrally managed database to streamline operations and improve performance. PostgreSQL was chosen over other options like MySQL due to its better fit for the project's needs. The transition from a NoSQL (MongoDB) to an SQL (PostgreSQL) database required introducing a new data structure, where documents were split into well-designed tables. This restructuring also created opportunities for new features and enhanced the system's overall efficiency.

Technical Evolution: The project explored moving core business logic into SQL embedded functions to leverage PostgreSQL's capabilities. Additionally, Redis was adopted later on to further improve efficiency. A significant aspect of this transition was the focus on creating a very fast core service to manage the centralized user database. The introduction of a new data architecture and the shift to SQL databases marked a critical step in optimizing the system's performance and ensuring more organized data management.

**Skills:** TypeORM · NestJS · Node.js · PostgreSQL · SQL · REST APIs

### 2022.01 - 2022.04: Core Packages

Project Overview: This project aimed to eliminate code duplication and improve scalability by restructuring the product into packages. Initially, the product contained significant code redundancy, with separate repositories created for each customer, which complicated maintenance and hindered scalability.

Refactoring Efforts: The solution involved creating an npm Angular module library, extracting different modules so that main applications could selectively utilize them. This approach was mirrored on the backend with an npm library comprising NestJS modules used by various services connected to Angular applications.

Introduction of Microservices: Following a complete product redesign, the initial repositories and packages were abandoned in favor of microservices with distinct functions. A core npm package was established to consolidate all essential tools used by these microservices. The core package's version number indicated the overall product version, ensuring consistency.

Further Modularization: As the project evolved, the core package was eventually divided into multiple packages. One package retained core functions while others extracted data model interfaces, schemas, and types, facilitating shared interface definitions across both backend and frontend. This modularization ensured better maintainability, scalability, and efficient development processes.

By refactoring the product into well-defined packages and introducing microservices, the project significantly improved the architecture, making it more scalable and easier to maintain.

**Skills:** React · Angular · NestJS · TypeScript · npm

### 2020.08 - 2021.03: Admin Platform

Project Overview: The project revolves around the software development and refinement of an administrative platform initially developed at a rapid pace. This swift development necessitated a comprehensive phase of debugging and refinement to ensure system stability and functionality. Alongside this, customer-driven enhancements were identified and integrated into the existing system to meet user needs and expectations.

Development and Enhancements: A significant aspect of the project was the creation of a comprehensive software developers handbook. This handbook was designed to aid new developers in onboarding smoothly and established crucial standards such as code style, commit message, and coding conventions. The introduction of socket communication marked a technical evolution, replacing the traditional HTTP communication method and enhancing system efficiency.

Stakeholder Collaboration: Throughout the project, there was regular and close collaboration with the CEO, who conveyed feature requests from customers. These meetings, held several times a week, ensured that customer feedback was promptly addressed and integrated into the platform. By providing estimated timeframes (ETAs) and continuous feedback on these requests, the development process remained aligned with customer needs and business goals.

Project Outcomes: This structured approach to refining and enhancing the administrative platform not only improved its functionality and user experience but also established a robust framework for future development. The combination of rigorous debugging, systematic documentation, and responsive integration of customer feedback set the foundation for a scalable and efficient administrative platform.

**Skills:** NestJS · MongoDB · Node.js · Angular · REST APIs · React.js

### 2019.03 - 2020.08: [Google Ads Exporter](https://github.com/entazis/google-ads-exporter)

The company required a consolidated view of its advertising campaign performance, encompassing both the expenditure and conversion metrics. To facilitate this, developed a Google Script that executes on a scheduled basis—daily, weekly, or monthly—on ads.google.com. This script is designed to aggregate the pertinent data regarding ad campaigns and systematically record it into a designated Google Sheet.

**Skills:** Google Ads · Data Analytics · Google Apps Script · JavaScript

### 2019.11 - 2019.12: [Landing page for a customer](https://github.com/entazis/sypico-landing)

Developed a modern, responsive landing page for a client, implementing custom design requirements and ensuring cross-browser compatibility.

**Outcome:**
Delivered a fully functional, visually appealing landing page that improved client's online presence and conversion rates.

**Skills:** React · Node.js · JavaScript · CSS · HTML

### 2019.09 - 2019.10: [Optimizing the website of a customer](https://github.com/entazis/robotmaster-next)

Project Overview: This project aimed to improve the efficiency and performance of a customer's site by addressing issues with server-side rendering (SSR) React technology.

Problem Identification: The original implementation of SSR React was misconfigured, causing the entire application to reload with every page navigation. This misconfiguration negated the benefits of single-page application (SPA) and server-side rendering, leading to suboptimal performance.

Solutions and Improvements:

- Fixed the [SSR React implementation](https://github.com/entazis/robotmaster-ssr) to ensure proper functionality, maintaining the benefits of SPA and SSR without unnecessary full-page reloads.
- Transitioned to the Next.js framework, enabling static rendering of pages, which further enhanced the site's speed and performance.

By resolving the initial misconfiguration and leveraging Next.js for static rendering, the project successfully optimized the site's performance, delivering a faster and more efficient user experience.

**Skills:** Next.js

### 2019.01 - 2019.07: [Landing Page of Programming School](https://github.com/entazis/landing-page-v2)

Project Objective:
The aim was to transition from a WordPress platform to a proprietary application. A designer had laid the groundwork with the creation of fundamental HTML, CSS, and JavaScript files to establish the visual design, along with minimal server-side logic for page rendering.

Implemented Solution:
Successfully migrated all existing functionalities from the legacy site to the new application, which included additional subpages, dynamic content features, localization capabilities, and database integration. Also implemented UTM tracking for marketing analytics. To optimize user experience and ensure effective deployment, conducted A/B testing for certain features, establishing an experimental environment for this purpose. Final refinements were made to enhance site speed, with a focus on improving search engine optimization (SEO). Ultimately, the entire site was converted into a static format to further boost SEO performance during production.

**Skills:** Node.js · JavaScript · A/B Testing · CSS · HTML

### 2019.04 - 2019.06: [Automatic Email Reports (triggers)](https://github.com/entazis/email-triggers)

Project Synopsis:
The company aimed to engage users by sending automated reminders to encourage product usage, specifically for ongoing learning activities. The strategy involved dispatching tailored reports on a weekly basis, as well as reports reflecting the user's activities from the previous day and from a week prior.

Technical Execution:
Developed the server-side logic required to support this engagement initiative, complemented by designing the HTML email templates. The system was programmed to execute on a daily and weekly schedule, intelligently querying the database for users based on their recent activity—whether they were active the day before, in the last week, or precisely seven days ago. Upon identifying the relevant users, the process dynamically compiled personalized emails detailing their recent interactions with the product and dispatched these communications accordingly.

**Skills:** MongoDB · Node.js · JavaScript

### 2019.03 - 2019.04: [Facebook Ads Exporter](https://github.com/entazis/facebook-ads-exporter)

Project Overview:
The objective was to replicate the functionality of a Google Ads data exporter, with the focus shifted to extracting data from Facebook Ads. The end goal was to achieve a similar output format in the spreadsheet as that of the Google Ads exporter.

Solution Development:
Identified an open-source tool that aligned closely with our requirements. After forking the repository, customized the solution to fit our specific use case, ensuring seamless integration and data export from Facebook Ads into our desired spreadsheet format.

**Skills:** Data Analytics · Google Apps Script · Facebook Ads · Google Sheets

### 2019.03 - 2019.04: Google Analytics Dashboard

Project Summary:
The company possessed a wealth of data that was underutilized. The role was to organize this data effectively, enabling the company to harness it for informed decision-making processes.

Action Taken:
Established a Google Analytics account to systematically gather pertinent data. Additionally, formulated and standardized the usage of UTM tags to ensure consistent and meaningful data collection practices.

**Skills:** Data Analytics · Data Science

### 2019.01 - 2019.03: [Badges (gamification)](https://github.com/entazis/badges-module)

Project Context:
The company aimed to enhance user engagement within their application by introducing a gamification feature. They decided to implement a badge system as the initial step towards this goal. The visual assets and designs for the badges were pre-defined and provided.

Technical Contribution:
Primary focus was on developing the server-side logic responsible for the criteria-based unlocking of badges. This involved creating algorithms that tracked user achievements and unlocked badges accordingly. Additionally, addressed minor client-side challenges to ensure a seamless integration of the badge system into the user interface.

**Skills:** API Development · MongoDB · Node.js · JavaScript · REST APIs

### 2018.11 - 2019.02: Payment Page of Programming School

The company aimed to transition from its existing multi-page payment system to a streamlined one-page application. This initiative was part of an effort to modernize the user interface in line with a new design provided by a professional designer.

Responsible for transferring the functionality of the legacy payment system to the new single-page application.

- Implemented form validation mechanisms on both the client and server sides to ensure data integrity and user input accuracy.
- Integrated internationalization (i18n) to accommodate multiple languages, thereby enhancing the application's global usability.
- Added a chat bubble feature to facilitate real-time user support and engagement.
- Conducted front-end refinements to address minor issues and improve the overall user experience.

The project was successfully executed, resulting in a functional and aesthetically pleasing one-page payment application that aligns with the company's vision for a more efficient and user-friendly interface.

**Skills:** Node.js · JavaScript · REST APIs

### 2018.07 - 2018.08: Growth Dashboard (AARRR metrics)

Project Contribution: Data Visualization Developer

Project Aim:
The growth team required a comprehensive dashboard to visualize user activity and behavioral data, which would serve as a foundation for deriving insights and informing strategic business decisions.

Solution Delivered:
Started the development of a sophisticated dashboard that provides a visual representation of user engagement and patterns. Initial task involved [scripting a data transformation](https://github.com/entazis/user-activity-data-preparer) process that converted raw data from MongoDB into a structured format suitable for chart plotting. This enabled the seamless integration of complex datasets into the dashboard, allowing for intuitive analysis and reporting.

Furthermore, integrated Google Analytics with the dashboard, providing access to key performance indicators such as page views and other relevant metrics. This integration offered a holistic view of user interactions and website performance, thereby enhancing the growth team's ability to make data-driven decisions.

The successful implementation of this dashboard has empowered the company with actionable insights, optimizing its approach to user engagement and growth strategy.

**Skills:** Data Analytics · Python · Google Analytics

### 2018.07 - 2018.07: [Power Plant Dropout Web Scraper](https://github.com/entazis/power-plant-dropout-scraper)

Project Objective:
The company aimed to develop an application capable of monitoring power plant dropouts and notifying users promptly upon their occurrence.

Technical Solution:
Responsible for designing and implementing the web scraping component of the project. This involved developing a script that systematically extracts dropout data from targeted websites. The collected data was then formatted and stored in a CSV file, ready for integration with the alert system. This functionality is crucial for the application's ability to provide real-time updates and maintain a high level of service reliability for the users.

**Skills:** Python · Git

### 2018.07 - 2018.07: [Weather Service Data Fix](https://github.com/entazis/weather-service-data-fix)

Project Challenge:
The company faced issues with incomplete weather data collection from various locations, leading to system disruptions due to missing timestamps.

Solution Implemented:
Developed a script designed to address the data gaps by filling them with estimated weather data, ensuring the application's stability and preventing crashes. To validate the effectiveness of this solution, also introduced a series of test cases specifically tailored to assess the robustness of the data correction process.

**Skills:** Python · Git

### 2018.01 - 2018.02: [Automatic Slack Registration](https://github.com/entazis/automatic-slack-registration)

Project Objective:
The online programming school sought to expand its Slack-based community by simplifying the registration process. The goal was to eliminate the need for users to navigate a lengthy and unfamiliar form-filling procedure.

Technical Solution:
Developed a Node.js application utilizing Puppeteer, a headless browser automation tool, to automate the registration process. The application initially registers using a placeholder email address and subsequently updates the registration to the user's actual email address. As a result, the user receives an email prompting them to set a new password, thereby granting them immediate access to the community's Slack workspace without the hassle of manual form submission.

**Skills:** Node.js · Git · Slack

### 2017.06 - 2018.01: [Customer Churn Prediction](https://github.com/entazis/churnacle-node)

Project Goal:
CodeBerry Programming School required a predictive system to identify users at risk of churning, enabling proactive engagement to retain them.

Solution Developed:

- A predictive analytics framework using R Studio hosted on an AWS server.
- Prepared datasets for analysis.
- Trained machine learning models to identify patterns indicative of user churn.
- Conducted exploratory experiments with neural networks to enhance predictive accuracy.

The result was a predictive model that significantly outperformed random selection, correctly identifying users likely to churn with a two-thirds accuracy rate. However, the model's performance was constrained by the limited amount of training data available from the company.

In addition to the analytics work, developed a Node.js application that automated the process of sending retention-focused emails through Intercom to the users identified by the model as at risk of churning.

**Outcome:**
The project delivered a functional predictive system that provided actionable insights, allowing CodeBerry Programming School to engage with users more effectively and reduce churn rates.

**Skills:** Deep Learning · Artificial Intelligence (AI) · Machine Learning · R · Docker

### 2017.12 - 2018.01: [Rapstar](https://github.com/entazis/rapstar-project) - Generating hip-hop lyrics using neural networks

Project Description:
Personal endeavor during university years to create an autonomous rap lyricist. Inspired by a Multi-layer Recurrent Neural Networks (RNN) project discovered on GitHub, the goal was to train a neural network to generate hip-hop lyrics independently.

Technical Execution:
Developed a web scraper to collect a substantial corpus of Hungarian hip-hop lyrics from a dedicated lyrics website. After performing the necessary data cleaning to refine the dataset, initiated the training process for the RNN with these texts.

**Outcome:**
The project's end result was a rap-bot that produced text resembling coherent Hungarian lyrics, although the content lacked a meaningful sense. It became evident that achieving the creation of authentic and intelligent lyrics would require a more extensive dataset and prolonged training period.

### 2016.09 - 2017.06: Smart Retail Product Recognition System

**Project Overview:**
Budapest University of Technology and Economics – Diploma Thesis and Startup Initiative

The project originated as a startup concept and evolved into a comprehensive diploma thesis. The initiative aimed to revolutionize retail operations through computer vision technology, specifically targeting product identification and checkout automation.

**Research and Validation:**

- Conducted extensive field research engaging with over 15 shop owners and retail managers to identify operational inefficiencies in retail environments.
- Applied Lean methodology principles to validate problem hypotheses and prototype technological solutions iteratively.
- Led a 3-person team through multiple startup incubator application processes, developing business models and go-to-market strategies.

**Technical Implementation:**

- Designed a computer vision-based system for automated product identification in supermarket environments, exploring barcode-free checkout possibilities.
- Leveraged neural networks and cloud-based machine learning APIs to achieve product recognition capabilities.
- Built functional prototype integrating TensorFlow and Keras for model training and inference, combined with Google Cloud Vision API for enhanced recognition accuracy.

**Analysis and Documentation:**

- Comprehensively documented scalability challenges including lighting variability, product packaging variations, and computational resource requirements.
- Evaluated business feasibility considering API costs at scale, hardware infrastructure requirements, and retail industry adoption barriers.
- Produced detailed technical and business documentation suitable for academic evaluation and investor presentations.

**Outcome:**
Successfully transformed an entrepreneurial concept into a rigorous academic project, demonstrating both technical feasibility and identifying critical challenges for real-world deployment in retail environments.

**Skills:** TensorFlow · Keras · Google Cloud Vision API · Computer Vision · Machine Learning · Lean Methodology · Team Leadership · Product Research

### 2015.06 - 2015.08: Computer Vision Speed Measurement System

**Project Overview:**
Developed a computer vision program utilizing advanced multi-integration camera technology to measure the speed of any moving object in real-time.

**Key Contributions:**

- Designed and implemented computer vision algorithms to detect and track moving objects across camera frames.
- Integrated camera inputs to enable speed calculation using multi-integration camera technology.
- Implemented calibration to improve the speed calculation accuracy.

**Outcome:** Successfully created a functional system capable of measuring the speed of moving objects using computer vision techniques, demonstrating practical application of image processing and object tracking algorithms.

**Skills:** OpenCV · Computer Vision · Image Processing · Object Tracking · C++ · Real-Time Systems

### 2015.02 - 2015.05: Teachable Remote Controller

**Project Overview:**
An independent university project focusing on embedded system design and hardware–software integration. The goal was to create a programmable remote controller capable of learning and reproducing infrared signals from other remotes.

**Key Contributions:**

- Designed and assembled the integrated circuit and supporting hardware.
- Soldered all components and connected them to a microcontroller.
- Developed low-level C firmware to control input buttons, manage the IR receiver, and transmit stored signals.
- Implemented a signal-recording system allowing users to teach the remote new commands dynamically.

**Outcome:**
The final device successfully stored and replayed infrared signals from arbitrary remotes, functioning as a fully programmable universal controller.

**Skills:** Embedded Systems · C Programming · Microcontrollers · Circuit Design · Infrared Communication · Soldering · Hardware Prototyping
