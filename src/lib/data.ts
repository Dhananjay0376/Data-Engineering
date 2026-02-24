export interface Section {
  title: string;
  content: string;
  keyPoints?: string[];
  diagram?: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  color: string;
  sections: Section[];
}

export const topics: Topic[] = [
  {
    id: 'intro-data-engineering',
    title: 'Introduction to Data Engineering',
    icon: 'Database',
    color: '#FFB800',
    sections: [
      {
        title: 'What is Data Engineering?',
        content:
          'Data Engineering is the foundational discipline that bridges raw, unprocessed information and the actionable insights organizations depend on. At its core, it is the practice of designing, building, and maintaining the systems, pipelines, and infrastructure that allow data to flow efficiently, reliably, and securely from its source to its destination. Without data engineers, even the most sophisticated machine learning models and business intelligence dashboards would be starved of the clean, structured data they require. Think of a data engineer as the architect and plumber of a city\'s water system — they ensure that clean water (data) reliably reaches every tap (analyst, data scientist, or application) on demand.',
        keyPoints: [
          'Definition: Data Engineering is the design and maintenance of systems that collect, store, transform, and serve data at scale.',
          'Data as Infrastructure: Just as roads enable transportation, data pipelines enable decision-making across an organization.',
          'Scale: Modern data systems handle petabytes of data, requiring distributed computing and cloud infrastructure.',
          'Reliability: A data engineer prioritizes uptime, latency guarantees, and fault-tolerant pipelines over ad-hoc solutions.',
          'The 80/20 Rule: 80% of a data science project is spent on data wrangling — data engineering automates and elevates this.',
          'Cross-disciplinary Impact: Data Engineering directly enables Analytics, Machine Learning, Business Intelligence, and Product Development.',
        ],
      },
      {
        title: 'Importance of Data Engineering',
        content:
          'In the modern digital economy, data is often called the new oil — but crude oil is useless without refinement. Data Engineering is that refinery. Organizations that invest in robust data engineering practices gain a decisive competitive advantage: they make decisions faster, with higher confidence, and on the basis of ground truth rather than intuition. Poor data engineering leads to data swamps, unreliable dashboards, inconsistent metrics, and ultimately, broken trust in data across the organization. The importance of data engineering has surged with the explosion of data volumes (from IoT sensors, mobile applications, social networks) and the democratization of cloud computing platforms.',
        keyPoints: [
          'Business Value: Reliable data pipelines are directly tied to revenue — e-commerce recommendations, fraud detection, and pricing all depend on them.',
          'Data Trust: Clean, well-documented data pipelines build organizational confidence in data-driven decisions.',
          'Operational Efficiency: Automated pipelines eliminate hours of manual data preparation work each day.',
          'Regulatory Compliance: Proper data lineage and governance tools, built by data engineers, ensure GDPR, HIPAA, and SOC 2 compliance.',
          'Enablement: Every data scientist, analyst, and product manager depends on infrastructure built by data engineers.',
          'Compounding Returns: A well-built data platform grows more valuable over time as more teams leverage it.',
        ],
      },
      {
        title: 'Applications of Data Engineering',
        content:
          'Data Engineering is not confined to a single industry — it is the backbone of any organization that relies on data to operate. In e-commerce, it powers real-time inventory management and personalized recommendations. In healthcare, it enables patient outcome analysis and clinical trial monitoring. In finance, it underpins fraud detection systems and risk modeling. In social media, it drives content ranking and advertisement targeting. Across every vertical, data engineers build the invisible infrastructure that makes intelligent applications possible.',
        keyPoints: [
          'E-Commerce: Real-time product recommendations (Amazon), dynamic pricing, inventory tracking.',
          'Finance: Real-time fraud detection, credit scoring, algorithmic trading pipelines.',
          'Healthcare: Electronic health record (EHR) pipelines, clinical trial analytics, genomic data processing.',
          'Media & Entertainment: Content recommendation engines (Netflix, YouTube), A/B testing platforms.',
          'Telecommunications: Network monitoring, churn prediction, usage analytics.',
          'Logistics: Route optimization, demand forecasting, supply chain visibility (UPS, FedEx).',
          'Government: Census data processing, public health surveillance, traffic pattern analysis.',
        ],
      },
    ],
  },
  {
    id: 'de-lifecycle',
    title: 'The Data Engineering Lifecycle',
    icon: 'RefreshCw',
    color: '#FF6B6B',
    sections: [
      {
        title: 'Data Generation & Collection',
        content:
          'The lifecycle begins at the point of origin — where data is born. Data is generated continuously by an enormous variety of sources: users interacting with web and mobile applications, IoT sensors monitoring physical environments, transactional systems recording business events, and external APIs exposing third-party data. This raw generation phase is largely outside the data engineer\'s control, but their first responsibility is to reliably capture this data in motion or at rest. This requires careful design of ingestion systems that can handle varying volumes, velocities, and formats without data loss.',
        keyPoints: [
          'Data Velocity: Refers to the speed at which data is generated — from daily batch exports to millions of events per second.',
          'Data Variety: Data comes in structured (SQL tables), semi-structured (JSON, XML), and unstructured (images, text) forms.',
          'Data Volume: The sheer quantity of data, often measured in terabytes or petabytes, demands scalable ingestion infrastructure.',
          'Source Systems: Databases, application logs, clickstreams, sensors, social media APIs, and third-party SaaS tools.',
          'Ingestion Modes: Batch ingestion collects data in chunks; stream ingestion captures data in real time as events occur.',
          'Schema Evolution: Source systems change over time; pipelines must handle new, removed, or renamed fields gracefully.',
        ],
      },
      {
        title: 'Data Storage',
        content:
          'Once data is collected, it must be stored in a manner that balances cost, accessibility, durability, and query performance. The choice of storage system is one of the most consequential decisions in data architecture. Data lakes provide low-cost, flexible storage for raw data of any format. Data warehouses provide structured, query-optimized storage for analytics. Operational databases serve real-time transactional workloads. Modern architectures often use multiple storage layers in concert, routing data to the right system based on its freshness, structure, and access patterns.',
        keyPoints: [
          'Data Lake: Centralized repository for raw, unprocessed data in any format (S3, Azure Data Lake Storage, GCS).',
          'Data Warehouse: Optimized for structured analytical queries; preprocessed and schema-on-write (Snowflake, BigQuery, Redshift).',
          'Operational Database: Serves live application traffic; optimized for low-latency reads/writes (PostgreSQL, MySQL).',
          'Hot vs. Cold Storage: Frequently accessed "hot" data is stored in fast, expensive storage; archived "cold" data in cheap object storage.',
          'Durability & Replication: Production storage systems replicate data across availability zones to prevent data loss.',
          'Retention Policies: Data has a defined lifecycle — raw logs may be retained for 90 days while aggregated metrics are kept indefinitely.',
        ],
      },
      {
        title: 'Data Processing & Analysis',
        content:
          'Raw data is rarely useful in its original form. Processing transforms it into something meaningful — cleaning dirty records, joining datasets, computing aggregations, enriching with external data, and structuring it for downstream consumption. Analysis is the phase where insights are extracted from processed data: trend detection, anomaly identification, predictive modelling, and business reporting. Data engineers build and operate the processing systems that power these analyses, ensuring they are fast, accurate, and repeatable.',
        keyPoints: [
          'Batch Processing: Transforming large volumes of data periodically (hourly, daily); suitable for historical analysis (Spark, Hive).',
          'Stream Processing: Processing data continuously as it arrives; essential for real-time use cases (Flink, Kafka Streams).',
          'Data Transformation: Cleaning (removing nulls, fixing types), enriching (adding external data), and aggregating (summing, averaging).',
          'Data Quality: Validating that processed data meets accuracy, completeness, consistency, and timeliness standards.',
          'Serving Layer: Processed data is exposed to analysts via SQL-accessible data warehouses, dashboards, or APIs.',
          'Observability: Monitoring pipelines for data freshness, row count anomalies, and schema drift.',
        ],
      },
      {
        title: 'The Role of a Data Engineer',
        content:
          'A Data Engineer is the architect and operator of a data organization\'s most critical infrastructure. They design systems that are robust enough to handle failures, efficient enough to meet performance SLAs, and flexible enough to adapt to changing business needs. They collaborate closely with data scientists (to ensure ML training data is available and clean), data analysts (to ensure analytics tables are accurate and fresh), and software engineers (to instrument applications for data collection). They also own the operational health of their pipelines, responding to incidents, optimizing performance, and continuously improving data quality.',
        keyPoints: [
          'Pipeline Development: Writing code (Python, Scala, SQL) to build ETL/ELT pipelines that move and transform data.',
          'Infrastructure Management: Provisioning and managing cloud resources (S3 buckets, compute clusters, databases).',
          'Data Modeling: Designing efficient schemas that serve both analytical and operational use cases.',
          'Collaboration: Working with analysts, scientists, and product teams to understand and fulfill data needs.',
          'Incident Response: Diagnosing and resolving pipeline failures, data anomalies, and performance bottlenecks.',
          'Documentation & Governance: Maintaining data catalogs, lineage tracking, and access control policies.',
          'Tech Stack Mastery: Proficiency in SQL, Python, Spark, Airflow, dbt, and cloud platforms (AWS, GCP, Azure).',
        ],
      },
    ],
  },
  {
    id: 'data-collection',
    title: 'Data Collection',
    icon: 'Download',
    color: '#00B4D8',
    sections: [
      {
        title: 'Sources of Data',
        content:
          'Data originates from a staggering diversity of sources in the modern world. Internal sources include transactional databases (recording every sale, login, and click), application logs (capturing system behavior and errors), and CRM or ERP systems (storing customer and business operations data). External sources encompass third-party APIs (weather data, financial market feeds, social media), public datasets (government census data, research repositories), and purchased commercial data. Understanding the characteristics of each source — its freshness, schema stability, volume, and access method — is the first step in building a reliable ingestion pipeline.',
        keyPoints: [
          'Transactional Databases: Operational databases (OLTP) recording every business event in real time.',
          'Application Logs: Structured or unstructured text files capturing system events, errors, and user actions.',
          'IoT Sensors: Smart devices, industrial sensors, and wearables generating continuous time-series data.',
          'Third-Party APIs: Weather, financial, social media, and mapping services exposing data via HTTP endpoints.',
          'Public Datasets: Government (data.gov), research (UCI, Kaggle), and open-source repositories.',
          'Event Streams: Clickstream data, user telemetry, and application events published to message queues (Kafka).',
          'Web Scraping: Programmatically extracting data from websites when no API is available.',
        ],
      },
      {
        title: 'Data Lakes',
        content:
          'A Data Lake is a centralized storage repository capable of holding vast amounts of raw data in its native format — structured tables, semi-structured JSON, or completely unstructured text, images, and video — until it is needed. Unlike a data warehouse (which enforces a strict schema on write), a data lake uses schema-on-read, meaning structure is applied only when data is queried. This flexibility makes it ideal as the landing zone for all ingested data. Modern implementations use cloud object storage (Amazon S3, Google Cloud Storage, Azure Data Lake Storage) as the foundation, combined with open table formats like Apache Iceberg or Delta Lake to add ACID transaction support.',
        keyPoints: [
          'Schema-on-Read: Data is stored raw; schema is applied at query time, offering maximum flexibility.',
          'Storage Format: Object storage (S3, GCS, ADLS) stores data as files in formats like Parquet, ORC, JSON, or raw CSV.',
          'Medallion Architecture: Organizes the lake into Bronze (raw), Silver (cleaned), and Gold (aggregated, analytics-ready) zones.',
          'Open Table Formats: Apache Iceberg and Delta Lake add ACID transactions, schema evolution, and time travel to data lakes.',
          'Cost Efficiency: Object storage is orders of magnitude cheaper than structured database storage per GB.',
          'Data Catalog: Tools like Apache Atlas or AWS Glue catalog datasets in the lake to make them discoverable.',
          'Use Cases: ML feature stores, historical archiving, exploratory analysis, and serving as the source for warehouses.',
        ],
        diagram: 'data-lake',
      },
      {
        title: 'Batch Processing',
        content:
          'Batch Processing is the paradigm of collecting data over a period of time and processing it all at once in a scheduled batch. It is one of the oldest and most reliable patterns in data engineering, ideal for use cases where slight latency is acceptable — nightly financial reconciliation, daily sales reports, or weekly ML model retraining. Batch jobs are typically scheduled (via cron or a workflow orchestrator like Airflow) and process bounded datasets. The primary tool for large-scale batch processing today is Apache Spark, which distributes computation across a cluster of machines to process petabytes of data efficiently.',
        keyPoints: [
          'Bounded Data: Batch processing operates on a finite, well-defined dataset (e.g., all orders from yesterday).',
          'Scheduling: Jobs are triggered by time (nightly cron), events (new file arrival), or manual execution.',
          'High Throughput: Optimized for processing large data volumes efficiently, not for low latency.',
          'Idempotency: Well-designed batch jobs produce the same output if re-run — critical for failure recovery.',
          'Apache Spark: The dominant distributed batch processing engine, processing data in parallel across a cluster.',
          'Tools: Spark, Hive, AWS Glue, Google Dataflow (batch mode), dbt (SQL transformations).',
          'Trade-off: Simpler to build and debug than streaming, but produces stale data between runs.',
        ],
      },
      {
        title: 'Stream Processing',
        content:
          'Stream Processing is the paradigm of processing data continuously as it is generated, event by event or in small micro-batches, enabling near real-time analytics and actions. It is essential for use cases where latency matters: fraud detection (flagging a suspicious transaction within 200ms), live dashboards (displaying current website traffic), and IoT monitoring (alerting when a sensor breaches a threshold). Apache Kafka serves as the durable, distributed event log that captures streams of events; Apache Flink and Spark Structured Streaming are the computation engines that process those streams.',
        keyPoints: [
          'Unbounded Data: Streaming operates on an infinite, continuously arriving stream of events.',
          'Low Latency: Decisions and outputs are produced within milliseconds to seconds of event generation.',
          'Apache Kafka: A distributed, fault-tolerant event log; the backbone of most streaming architectures.',
          'Apache Flink: A stateful stream processing engine with exactly-once semantics and millisecond latency.',
          'Windowing: Aggregating events over time windows — tumbling (fixed), sliding (overlapping), or session-based.',
          'Exactly-Once Semantics: Guarantees each event is processed precisely once, even if the system restarts after a failure.',
          'Trade-off: More complex to build and debug than batch, but provides real-time data freshness.',
        ],
      },
      {
        title: 'Web Scraping',
        content:
          'Web Scraping is the automated process of programmatically extracting data from websites when no official API or export mechanism is available. It is widely used for competitive intelligence (monitoring competitor prices), research data collection, lead generation, and building datasets from public information. Python libraries such as BeautifulSoup (for HTML parsing) and Scrapy (for full-scale scraping frameworks) are the primary tools. However, scrapers require constant maintenance as websites change their structure, and must be designed to respect robots.txt terms of service and rate limits to avoid IP bans.',
        keyPoints: [
          'HTML Parsing: Libraries like BeautifulSoup parse the HTML DOM to extract specific elements (prices, titles, links).',
          'Scrapy: A full-featured Python scraping framework with built-in concurrency, pipelines, and middleware.',
          'Selenium / Playwright: Browser automation tools for scraping JavaScript-rendered Single Page Applications (SPAs).',
          'Rate Limiting: Introducing delays between requests to avoid overloading the target server and triggering bans.',
          'robots.txt: A file on websites indicating which paths scrapers are allowed to access — must be respected.',
          'Data Cleaning: Scraped data is often messy (HTML tags, inconsistent formatting) and requires significant cleaning.',
          'Legal Considerations: Web scraping may violate terms of service — always verify legality for commercial use.',
        ],
      },
      {
        title: 'APIs & Data Extraction',
        content:
          'Application Programming Interfaces (APIs) are the most structured and reliable method of extracting data from external services. A REST API exposes data via HTTP endpoints (GET, POST, PUT, DELETE), returning structured JSON or XML responses. GraphQL APIs allow callers to request exactly the fields they need, reducing over-fetching. Building robust API-based ingestion pipelines requires handling authentication (OAuth, API keys), pagination (fetching data in pages), rate limiting (respecting the number of requests per minute), and schema changes (when the API provider updates their data model).',
        keyPoints: [
          'REST APIs: The dominant paradigm; data is accessed via URLs (endpoints) using standard HTTP methods.',
          'GraphQL: A flexible query language for APIs allowing precise field selection in a single request.',
          'Authentication: APIs are secured via API keys, OAuth 2.0 tokens, or JWT (JSON Web Tokens).',
          'Pagination: Large datasets are split across pages; pipelines must iterate through all pages to collect complete data.',
          'Rate Limiting: API providers cap requests per second/minute; pipelines must implement back-off and retry logic.',
          'Webhooks: A push-based alternative where the API provider sends data to your endpoint when events occur.',
          'Python Requests: The standard Python library for making HTTP API calls; `requests` and `httpx` are most common.',
        ],
      },
    ],
  },
  {
    id: 'data-modeling',
    title: 'Data Modeling',
    icon: 'GitBranch',
    color: '#7B61FF',
    sections: [
      {
        title: 'Core Concepts of Data Modeling',
        content:
          'Data Modeling is the process of creating a conceptual, logical, or physical representation of data and the relationships between data elements. It is the blueprint that guides how data will be stored, organized, and accessed. A good data model makes data easy to query, maintain, and extend; a poor one results in convoluted queries, data anomalies, and costly refactoring. Data modeling progresses through three levels: the conceptual model (what entities exist and how they relate), the logical model (how entities map to tables and columns, independent of technology), and the physical model (the exact SQL schema deployed on a specific database).',
        keyPoints: [
          'Conceptual Model: High-level view of entities and relationships; used for stakeholder communication (ER diagrams).',
          'Logical Model: Translates the conceptual model to tables, attributes, and keys, independent of any specific database.',
          'Physical Model: The actual database schema — specific data types, indexes, partitions, and storage engines.',
          'Entity: A real-world object or concept that we want to store information about (Customer, Product, Order).',
          'Attribute: A property or characteristic of an entity (customer_id, email, created_at).',
          'Relationship: An association between two or more entities (Customer places Orders; Order contains Products).',
          'Primary Key (PK): A unique identifier for each record in a table — no nulls, no duplicates.',
        ],
      },
      {
        title: 'Entity-Relationship (E-R) Diagrams',
        content:
          'An Entity-Relationship Diagram (ERD) is a visual blueprint of a database schema, showing entities as rectangles, their attributes as ovals, and their relationships as diamonds or labeled lines. ERDs are a universal communication tool — they allow database designers, developers, and business stakeholders to agree on data structure before a single line of SQL is written. The cardinality notation on relationship lines specifies how many instances of one entity can be associated with instances of another: One-to-One (a person has one passport), One-to-Many (a customer places many orders), or Many-to-Many (students enroll in many courses; courses have many students).',
        keyPoints: [
          'Entities: Represent tables — depicted as rectangles in ER notation (e.g., Customer, Order, Product).',
          'Attributes: Properties of entities — depicted as ovals; underlined attributes are primary keys.',
          'Relationships: Associations between entities — depicted as diamonds labeled with a verb (places, contains, belongs_to).',
          'One-to-One (1:1): Each record in Table A relates to exactly one record in Table B (Person ↔ Passport).',
          'One-to-Many (1:N): One record in Table A relates to many records in Table B (Customer → Orders).',
          'Many-to-Many (M:N): Many records in Table A relate to many in Table B; resolved via a junction/bridge table.',
          'Foreign Key (FK): A column referencing the primary key of another table, enforcing referential integrity.',
        ],
        diagram: 'er-diagram',
      },
      {
        title: 'Normalization',
        content:
          'Normalization is the systematic process of structuring a relational database to reduce data redundancy and prevent data anomalies (insert, update, and delete anomalies). It is achieved by dividing large, complex tables into smaller focused tables and defining clear relationships between them using foreign keys. The process follows a set of rules called Normal Forms (NF). Each higher normal form builds on the previous and eliminates a specific type of redundancy. While normalization is the gold standard for transactional (OLTP) databases, analytical (OLAP) workloads often deliberately denormalize data to minimize expensive JOIN operations.',
        keyPoints: [
          'First Normal Form (1NF): Each column holds atomic (indivisible) values; no repeating groups; each row is unique.',
          'Second Normal Form (2NF): Must satisfy 1NF; every non-key attribute must be fully dependent on the entire primary key (eliminates partial dependency).',
          'Third Normal Form (3NF): Must satisfy 2NF; no non-key attribute should depend on another non-key attribute (eliminates transitive dependency).',
          'Boyce-Codd Normal Form (BCNF): A stronger version of 3NF — every determinant must be a candidate key.',
          'Insert Anomaly: Without normalization, inserting a record may require inserting redundant data elsewhere.',
          'Update Anomaly: Changing one fact stored in multiple places requires updating every occurrence — risky.',
          'Delete Anomaly: Deleting one record may accidentally delete other facts stored alongside it.',
        ],
      },
      {
        title: 'Denormalization',
        content:
          'Denormalization is the intentional introduction of redundancy into a data model by combining tables, duplicating data, or pre-computing aggregations. While it violates the rules of normalization, it is a deliberate performance optimization for read-heavy analytical workloads. In a normalized schema, generating a report might require joining 8–10 tables — slow and resource-intensive at scale. By denormalizing into a wide, flat table, the same query requires no JOINs, dramatically improving query speed. Data warehouses and analytics systems almost always use denormalized schemas (Star or Snowflake schema), trading storage for performance.',
        keyPoints: [
          'Read Performance: Denormalized tables dramatically reduce JOIN operations, speeding up analytical queries.',
          'Storage Trade-off: Redundant data increases storage consumption but reduces compute cost per query.',
          'Flat Tables: Pre-joining related tables into a single wide table is a common denormalization pattern.',
          'Star Schema: A fact table surrounded by denormalized dimension tables — the standard for data warehouses.',
          'Snowflake Schema: A normalized variant of the Star Schema — dimensions are split into sub-dimensions.',
          'Pre-aggregation: Storing pre-computed sums, averages, and counts to avoid re-computation at query time.',
          'When to Denormalize: When query latency is critical and write operations are infrequent.',
        ],
      },
      {
        title: 'OLAP & OLTP',
        content:
          'Online Analytical Processing (OLAP) and Online Transaction Processing (OLTP) represent two fundamentally different paradigms for working with data, each optimized for a distinct set of operations. OLTP systems are the operational heart of a business — they handle thousands of concurrent users performing fast, simple, transactional reads and writes (placing an order, logging in, updating a record). OLAP systems serve the analytical brain — they handle complex queries spanning millions of rows to compute aggregations, trends, and forecasts for business reporting. A complete data architecture includes both, connected by data pipelines.',
        keyPoints: [
          'OLTP Purpose: Support high-volume, concurrent, real-time transactions with strict ACID guarantees.',
          'OLAP Purpose: Support complex analytical queries and aggregations over large historical datasets.',
          'Schema (OLTP): Highly normalized (3NF) to minimize redundancy and ensure write efficiency.',
          'Schema (OLAP): Denormalized (Star/Snowflake) to minimize JOIN overhead for reads.',
          'Query Style (OLTP): Short, targeted queries affecting a few rows — e.g., SELECT * FROM orders WHERE id = 42.',
          'Query Style (OLAP): Complex aggregations spanning millions of rows (SUM revenue GROUP BY month, region).',
          'Storage (OLTP): Row-oriented — entire rows are written and read together.',
          'Storage (OLAP): Column-oriented — only relevant columns are scanned, enabling massive compression and fast aggregation.',
          'Examples (OLTP): PostgreSQL, MySQL, Oracle, SQL Server.',
          'Examples (OLAP): Snowflake, Google BigQuery, Amazon Redshift, ClickHouse, Apache Druid.',
        ],
        diagram: 'olap-vs-oltp',
      },
    ],
  },
  {
    id: 'data-storage',
    title: 'Data Storage',
    icon: 'HardDrive',
    color: '#00D4AA',
    sections: [
      {
        title: 'Relational Databases',
        content:
          'Relational Databases are the most mature and widely deployed category of database systems. They organize data into tables (relations) composed of rows and columns, and use SQL (Structured Query Language) as the standard interface for querying and manipulation. Their defining feature is the enforcement of ACID properties — Atomicity (a transaction either fully succeeds or fully fails), Consistency (data always moves from one valid state to another), Isolation (concurrent transactions do not interfere with each other), and Durability (committed data survives system failures). These guarantees make relational databases the trusted backbone of financial systems, e-commerce platforms, and any application where data correctness is non-negotiable.',
        keyPoints: [
          'ACID Properties: Atomicity, Consistency, Isolation, Durability — the gold standard for transactional integrity.',
          'Schema Enforcement: Tables have a defined schema; every row must conform to the column definitions and constraints.',
          'SQL: The universal declarative language for querying, inserting, updating, and deleting data in relational databases.',
          'Indexes: Data structures (B-tree, Hash) that dramatically speed up lookups on specific columns.',
          'Constraints: Rules enforced by the database — PRIMARY KEY (uniqueness), FOREIGN KEY (referential integrity), NOT NULL, UNIQUE, CHECK.',
          'Joins: The ability to combine rows from multiple tables based on a related column — the foundational power of the relational model.',
          'Popular Systems: PostgreSQL (open-source, feature-rich), MySQL (web workloads), Oracle (enterprise), SQL Server (Microsoft ecosystem).',
          'Use Cases: Banking (account balances), e-commerce (orders, inventory), healthcare (patient records), CRM (customer data).',
        ],
      },
      {
        title: 'NoSQL Databases',
        content:
          'NoSQL (Not Only SQL) databases emerged to address the limitations of relational databases when dealing with massive scale, flexible data structures, and distributed architectures. They sacrifice some ACID guarantees (adopting the weaker BASE model — Basically Available, Soft state, Eventual consistency) in exchange for horizontal scalability, flexible schemas, and specialized data models. NoSQL databases are not a monolith — they encompass four fundamentally different categories, each optimized for a specific data access pattern: Document stores for hierarchical content, Key-Value stores for cache-like lookups, Column-family stores for wide-column analytics, and Graph databases for relationship-heavy data.',
        keyPoints: [
          'Document Stores: Store data as JSON-like documents; ideal for content management and user profiles. (MongoDB, CouchDB)',
          'Key-Value Stores: Ultra-fast lookups by a unique key; ideal for caching and session management. (Redis, DynamoDB)',
          'Column-Family Stores: Store data in column families; optimized for write-heavy workloads and time-series data. (Apache Cassandra, HBase)',
          'Graph Databases: Model data as nodes and edges; ideal for social networks, recommendation engines, fraud detection. (Neo4j, Amazon Neptune)',
          'Horizontal Scalability: NoSQL databases are designed to scale out across hundreds of commodity servers.',
          'Flexible Schema: Documents can have varying fields without requiring a schema migration — ideal for rapidly evolving data.',
          'BASE vs ACID: BASE trades strict consistency for availability and partition tolerance (CAP Theorem).',
          'CAP Theorem: A distributed system can guarantee only two of three: Consistency, Availability, Partition Tolerance.',
        ],
      },
      {
        title: 'Data Warehouses',
        content:
          'A Data Warehouse is a centralized, highly structured analytical database specifically engineered for business intelligence (BI) workloads — reporting, dashboards, and complex analytical queries over historical data. Unlike operational databases (which serve live application traffic), a data warehouse aggregates data from multiple source systems (CRM, ERP, sales platform, marketing tools) into a single, unified analytical repository. Modern cloud data warehouses like Snowflake, Google BigQuery, and Amazon Redshift use massively parallel processing (MPP), columnar storage, and on-demand compute scaling to handle petabyte-scale queries with sub-second response times.',
        keyPoints: [
          'Centralized Repository: Integrates data from multiple operational systems into a single analytical platform.',
          'Historical Data: Warehouses store months or years of historical data to enable trend analysis and forecasting.',
          'MPP Architecture: Massively Parallel Processing distributes query execution across hundreds of compute nodes.',
          'Columnar Storage: Stores data column by column; enables extreme compression and fast aggregation of specific columns.',
          'Separation of Storage & Compute: Modern warehouses (Snowflake, BigQuery) scale compute independently of storage.',
          'ETL/ELT Pipelines: Source data is extracted, transformed, and loaded into the warehouse on a scheduled basis.',
          'Data Mart: A subject-oriented subset of a data warehouse serving a specific business unit (Sales Mart, Finance Mart).',
          'Leading Platforms: Snowflake (cloud-native, multi-cloud), Google BigQuery (serverless), Amazon Redshift (AWS ecosystem), Databricks (lakehouse).',
          'BI Integration: Warehouses power Tableau, Looker, Power BI, and Metabase dashboards via SQL connections.',
        ],
      },
    ],
  },
  {
    id: 'etl-transformation',
    title: 'Data Processing & Transformation (ETL)',
    icon: 'Workflow',
    color: '#E040FB',
    sections: [
      {
        title: 'What is ETL?',
        content:
          'ETL — Extract, Transform, Load — is the foundational process pattern of data engineering. It describes the three-stage journey that data takes from its raw source systems to its final, analytics-ready destination in a data warehouse or data mart. Extraction pulls raw data from heterogeneous sources (databases, APIs, file systems). Transformation applies business logic to clean, enrich, and restructure the data into a consistent, high-quality format. Loading deposits the transformed data into the target system where analysts and BI tools can access it. The ETL pattern is over four decades old yet remains central to modern data architectures, though its evolution into ELT (Extract, Load, Transform) reflects the power of modern cloud compute.',
        keyPoints: [
          'Extract: Pulling data from source systems — databases (via JDBC/ODBC), APIs (via HTTP), files (CSV, JSON, Parquet), or event streams.',
          'Transform: Applying business logic — cleaning nulls, standardizing formats, joining datasets, computing derived fields, and aggregating metrics.',
          'Load: Writing the processed data into the target system — a data warehouse (Snowflake, BigQuery), a data mart, or a reporting database.',
          'ETL vs ELT: In ETL, transformation happens outside the warehouse (in Spark or a separate server). In ELT, raw data is loaded first and transformation happens inside the warehouse using SQL.',
          'ELT Advantage: Modern cloud warehouses have enormous compute power; ELT leverages this and simplifies the pipeline by eliminating intermediate transformation servers.',
          'dbt (Data Build Tool): The dominant ELT transformation framework — defines transformations as SQL SELECT statements with version control, tests, and documentation.',
          'Full Load vs Incremental Load: Full load replaces all data each run (simple but slow); incremental load only processes new or changed records (efficient but complex).',
        ],
      },
      {
        title: 'The Extract Phase',
        content:
          'Extraction is the first and often most challenging phase of ETL. Source systems are diverse, poorly documented, and not designed with data extraction in mind. A production OLTP database cannot simply be queried with heavy analytical jobs — it would bring down the live application. Data engineers use specialized extraction strategies to collect data reliably and safely from source systems: full snapshots (copying entire tables), incremental extraction (only new/changed rows since the last run), Change Data Capture (streaming database transaction logs), and API polling. Each strategy has different complexity, latency, and impact on source systems.',
        keyPoints: [
          'Full Snapshot: Extract all rows from the source table on every run — simple but resource-intensive for large tables.',
          'Incremental Extraction: Use a timestamp or auto-incrementing ID to extract only rows created or modified since the last run.',
          'Change Data Capture (CDC): Intercept database transaction logs (WAL in PostgreSQL, binlog in MySQL) to capture every INSERT, UPDATE, and DELETE in real time.',
          'CDC Tools: Debezium (open-source CDC platform), AWS DMS, Kafka Connect — stream changes as events.',
          'API Extraction: Paginate through REST API endpoints, handling authentication, rate limits, and retries.',
          'File-Based Extraction: Pick up new files from an SFTP server or S3 bucket as they arrive (common with partners).',
          'Source Impact: Always extract with minimal impact on production systems — read replicas, off-peak scheduling, connection pooling.',
        ],
      },
      {
        title: 'The Transform Phase',
        content:
          'Transformation is the most intellectually rich phase of ETL — it is where raw, messy, heterogeneous data is shaped into a clean, consistent, and meaningful dataset that drives business decisions. Transformations range from simple data type conversions to complex multi-step business logic. The quality of transformations directly determines the trustworthiness of downstream analytics. Poor transformations produce incorrect dashboards, which erode confidence in data across the organization. Data engineers must implement transformations alongside comprehensive unit tests and data quality checks to ensure the output meets defined standards.',
        keyPoints: [
          'Data Cleaning: Removing or imputing null values, correcting misspellings, standardizing date formats, and deduplicating records.',
          'Data Type Casting: Converting strings to integers/dates, parsing JSON fields, and normalizing units (USD vs EUR).',
          'Business Logic Application: Calculating derived metrics (profit margin = revenue - cost), applying segmentation rules (customer tier based on spend).',
          'Data Enrichment: Joining with external datasets to add additional context (appending ZIP code lookup to add city/state).',
          'Aggregation: Computing SUM, COUNT, AVG, MAX, MIN grouped by time periods and dimensions.',
          'Data Validation / Assertions: Testing that row counts match expectations, no nulls in required fields, values are within valid ranges.',
          'Slowly Changing Dimensions (SCDs): Handling changes to dimension attributes over time — e.g., a customer moves to a new city. Should we preserve history or overwrite?',
          'dbt Tests: Built-in tests for uniqueness, non-null, referential integrity, and accepted values on every transformed table.',
        ],
      },
      {
        title: 'The Load Phase',
        content:
          'Loading is the final phase of ETL, responsible for depositing the transformed data into the target system in a reliable and efficient manner. The loading strategy chosen has significant implications for performance, data freshness, and storage costs. A full refresh truncates and replaces the entire target table on every run — simple but expensive. An append-only load adds new rows without modifying existing data — fast but creates data duplication over time. An upsert (MERGE) strategy inserts new rows and updates existing ones — complex but produces an accurate current-state snapshot. The correct strategy depends on the use case, data volume, and how the target table is consumed.',
        keyPoints: [
          'Full Refresh (Truncate & Load): Deletes all existing data in the target table and replaces it entirely each run — simple but expensive for large tables.',
          'Append-Only: New rows are added without modifying existing data — suitable for immutable event logs and time-series data.',
          'Upsert (MERGE): Inserts new rows and updates existing rows based on a matching key — produces accurate current-state snapshots.',
          'Partitioned Loading: Data is partitioned by date or another column; each run overwrites only the relevant partition — efficient and idempotent.',
          'Idempotency: Loading is idempotent when re-running produces the same result — critical for safe pipeline retries after failures.',
          'Write Modes: Database COPY commands (Redshift), BigQuery load jobs, and Spark write operations are optimized for bulk load performance.',
          'Loading Validation: After loading, always validate row counts and key metrics against source to detect load failures or silent data corruption.',
          'Transaction Safety: Use database transactions to ensure that a failed load does not leave the target table in a partially written, corrupt state.',
        ],
      },
      {
        title: 'Pipeline Orchestration & Monitoring',
        content:
          'A data pipeline is only as reliable as its orchestration and monitoring infrastructure. Orchestration tools schedule, sequence, and manage dependencies between pipeline tasks — ensuring that Task B only runs after Task A has successfully completed. Apache Airflow is the dominant orchestration platform, using Python-based DAGs (Directed Acyclic Graphs) to define workflows. Beyond scheduling, production pipelines require robust monitoring: tracking data freshness (was today\'s data loaded on time?), volume anomalies (did we receive 10x fewer rows than usual?), and schema changes (did a source system silently add or rename a column?).',
        keyPoints: [
          'DAG (Directed Acyclic Graph): A workflow where tasks (nodes) are connected by dependencies (edges) with no circular dependencies.',
          'Apache Airflow: Industry-standard orchestrator; defines DAGs in Python with a rich web UI for monitoring and manual triggering.',
          'Prefect & Dagster: Modern, Python-first orchestrators with better error handling, dynamic flows, and data asset tracking.',
          'Retry Logic: Failed tasks should automatically retry with exponential back-off before alerting the on-call engineer.',
          'SLA Monitoring: Define expected completion times for pipelines; alert when a DAG run is late.',
          'Data Freshness Monitoring: Verify that tables are updated within expected time windows — detect silent pipeline failures.',
          'Anomaly Detection: Alert when row counts, null rates, or metric values deviate significantly from historical baselines.',
          'Lineage Tracking: Track data lineage — understanding which source tables flow into which downstream tables, enabling impact analysis when a source changes.',
        ],
      },
    ],
  },
];
