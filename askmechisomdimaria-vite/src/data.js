export const profile = {
  name: 'Chisom Okoye',
  role: 'Senior Data Engineer · Senior Software Engineer · Senior Cloud Engineer · Senior BI Engineer',
  tagline:
    'I build data platforms, cloud systems, and analytics products that scale — with a focus on reliability, observability, and developer experience.',
  email: 'you@example.com',
  linkedin: 'https://linkedin.com/in/chisomokoye',
  github: 'https://github.com/chisomloius',
  location: 'Nigeria · Open to Remote (Global)', // ← update
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '7+',  label: 'Years experience' },
  { value: '20+', label: 'Pipelines shipped' },
  { value: '5',   label: 'Cloud platforms & tools' },
  { value: '3',   label: 'Teams led / mentored' },
]

export const roles = [
  {
    title: 'Senior Data Engineer',
    summary:
      'I am a Senior Data Engineer with hands-on experience designing, building, and scaling modern data platforms. I specialize in Python, SQL, Apache Airflow, dbt, and cloud data warehouses (Snowflake, BigQuery, Redshift). I have led end-to-end data migrations, optimized batch and streaming pipelines for cost and latency, and mentored engineers on best practices. I’m comfortable owning the full lifecycle — from ingestion through transformation, orchestration, and governance.',
  },
  {
    title: 'Senior Software Engineer',
    summary:
      'I am a Senior Software Engineer with a strong foundation in Python, distributed systems, and cloud-native application development. I have architected and shipped microservices, improved system reliability through observability and testing practices, and delivered complex features end-to-end in Agile teams. I write clean, maintainable code and enjoy collaborating with cross-functional partners to solve hard problems.',
  },
  {
    title: 'Python Developer',
    summary:
      'I am a Python Developer experienced in building APIs, automation tooling, and data-driven applications. I’m proficient with FastAPI, Flask, pandas, and pytest, and I focus on writing maintainable, well-tested code. I work comfortably in CI/CD environments and enjoy turning ambiguous requirements into clear, working software.',
  },
  {
    title: 'Senior Cloud Engineer',
    summary:
      'I am a Senior Cloud Engineer with deep experience designing secure, highly available cloud architectures. I work extensively with AWS (and touch Azure/GCP), Infrastructure-as-Code (Terraform, CloudFormation), Kubernetes, and CI/CD pipelines. I’ve led cost-optimization initiatives, hardened environments against security findings, and driven IaC adoption across teams.',
  },
  {
    title: 'Senior BI Developer',
    summary:
      'I am a Senior BI Developer skilled in turning raw data into trusted, self-service analytics. I work with SQL, dbt, Power BI, Tableau, and Looker to build semantic layers, dashboards, and data models that stakeholders actually use. I partner with business teams to define KPIs and deliver reporting that drives decisions.',
  },
]

export const interviewQA = [
  {
    q: 'Tell me about yourself.',
    a:
      'I’m Chisom Dimaria, a senior engineer with 7+ years of experience across data engineering, software engineering, cloud infrastructure, and business intelligence. I’ve built data platforms end-to-end — from ingestion through transformation and reporting — on AWS and GCP, and I’ve shipped production services in Python. My recent work has focused on designing scalable pipelines, standardizing infrastructure with Terraform, and building self-service analytics that teams actually use. I enjoy ownership: taking ambiguous problems, aligning stakeholders, and shipping reliable systems that create real business impact.',
  },
  {
    q: 'Why are you interested in this role?',
    a:
      'I’m drawn to roles where I can own the full data or software lifecycle and have real influence on architecture. This role excites me because it combines platform ownership with the kind of cross-functional collaboration I do best — partnering with product, analytics, and business teams to turn requirements into systems that scale. I’m also looking for an environment where I can mentor engineers and grow technically.',
  },
  {
    q: 'What are your salary expectations?',
    a:
      'Based on the scope of the role and my experience, I’m targeting $50k–$150k USD annually, with flexibility depending on the total package — equity, bonus, location, and responsibilities. I’m happy to align to your band once we’ve confirmed mutual fit.',
  },
  {
    q: 'Describe a challenging project you led.',
    a:
      'One of my most challenging projects was rebuilding a batch pipeline that had grown unreliable and costly. I designed a new architecture with dbt + Airflow, migrated 40+ models, added observability, and cut runtime by ~60% while reducing cost. The tricky part was migrating without breaking downstream dashboards — so we shadow-ran the new pipeline in parallel for three weeks and cut over incrementally, with alerts and a rollback plan.',
  },
  {
    q: 'How do you approach building a data pipeline end-to-end?',
    a:
      'I start from the business question and define SLAs. Then I design ingestion (batch vs streaming), storage (raw → staged → curated), and transformations (dbt or Spark). I layer in orchestration (Airflow/Dagster), data-quality checks (dbt tests, Great Expectations), and observability (freshness, row counts, alerting). Finally, I document lineage and expose it to BI. The goal is to make the pipeline boring — repeatable, testable, and observable.',
  },
  {
    q: 'How do you ensure code quality?',
    a:
      'I lean on three things: test coverage at the right level (unit for logic, integration for pipelines, contract tests for APIs), automated CI with linting and static analysis, and code review as a learning opportunity. For data, I treat transformations as code with dbt tests and version control. For infra, I use IaC and always plan-before-apply.',
  },
  {
    q: 'What’s your experience with AWS / cloud?',
    a:
      'I’ve designed and operated production workloads on AWS: VPC, IAM, S3, RDS, EKS, Lambda, and data services like Glue and Redshift. I standardize environments with Terraform, manage CI/CD through GitHub Actions, and drive cost optimization with tagging, right-sizing, and reserved capacity. I’m also comfortable in multi-account org structures and using CloudWatch/CloudTrail for observability and audit.',
  },
  {
    q: 'How do you work with stakeholders?',
    a:
      'I start with discovery — understanding the business question, not just the ask. Then I translate it into a scoped deliverable with clear success metrics, keep stakeholders in the loop with short demos, and use feedback loops so they’re not surprised at launch. I write one-pagers when alignment matters more than technical detail.',
  },
  {
    q: 'Why are you leaving your current role?',
    a:
      'I’ve grown significantly where I am, but I’m looking for a role with more scope for platform ownership and architectural impact. I’m proud of what I’ve shipped, and I’m ready for a team where I can contribute at a larger scale.',
  },
  {
    q: 'Where do you see yourself in 5 years?',
    a:
      'I’d like to be a technical leader — staff or principal level — shaping data or cloud architecture and mentoring engineers. I care about building systems and teams that outlast any single project.',
  },
]

export const salaryInfo = {
  target: '$50k – $150k USD',
  note: 'Flexible based on total package — equity, bonus, location, and responsibilities.',
  location: 'Lagos, Nigeria · Open to Remote (Global) or Hybrid',
  workAuth: 'Authorized to work in [country] — open to relocation / sponsorship',
  availability: '2 weeks from offer',
}

export const projects = [
  {
    title: 'Real-Time CDC Data Platform',
    role: 'Lead Data Engineer',
    stack: ['Kafka', 'Debezium', 'Snowflake', 'Airflow', 'dbt'],
    summary:
      'Streaming change-data-capture platform feeding analytics for 30+ source tables with sub-minute freshness.',
    bullets: [
      'Architected Kafka + Debezium ingest with exactly-once semantics into Snowflake.',
      'Cut end-to-end latency from 6h batch to <60s streaming.',
      'Added dbt tests + freshness alerts; SLA breaches dropped to near zero.',
    ],
  },
  {
    title: 'Cloud Data Warehouse Migration',
    role: 'Senior Data Engineer',
    stack: ['dbt', 'BigQuery', 'Python', 'Terraform'],
    summary:
      'Migrated a legacy on-prem warehouse to BigQuery with a dbt-based semantic layer.',
    bullets: [
      'Migrated 120+ models with zero-downtime cutover using shadow runs.',
      'Reduced warehouse cost by ~40% via partitioning + clustering strategy.',
      'Introduced Terraform modules for repeatable environment setup.',
    ],
  },
  {
    title: 'Executive Analytics & BI Suite',
    role: 'Senior BI Developer',
    stack: ['Power BI', 'dbt', 'SQL', 'Snowflake'],
    summary:
      'Self-service BI layer used by executive and finance teams to run weekly reviews.',
    bullets: [
      'Designed KPI definitions and semantic layer in dbt with business stakeholders.',
      'Shipped dashboards used by 100+ internal users across 4 business units.',
      'Automated refresh + alerting; eliminated manual reporting effort (~10 hrs/wk).',
    ],
  },
  {
    title: 'Python API Platform',
    role: 'Senior Software Engineer',
    stack: ['Python', 'FastAPI', 'Postgres', 'Docker', 'AWS ECS'],
    summary:
      'Multi-tenant REST API serving internal analytics services and partner integrations.',
    bullets: [
      'Designed API surface with FastAPI + Postgres; adopted by 8 internal teams.',
      'Introduced contract tests and structured logging, cutting MTTR significantly.',
      'Packaged as a reusable internal service template.',
    ],
  },
  {
    title: 'Cloud Infrastructure Standardization',
    role: 'Senior Cloud Engineer',
    stack: ['AWS', 'Terraform', 'EKS', 'GitHub Actions'],
    summary:
      'Standardized infrastructure-as-code across 4 teams and 12 environments.',
    bullets: [
      'Introduced reusable Terraform modules with policy checks in CI.',
      'Migrated workloads to EKS with rolling deploys and autoscaling.',
      'Enabled OIDC-based CI deploys — removed long-lived AWS keys entirely.',
    ],
  },
]