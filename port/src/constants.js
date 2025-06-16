// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ASPNET from './assets/tech_logo/ASP.NET.png'
import VBNET from './assets/tech_logo/VB.NET.png'
import VisualBasic from './assets/tech_logo/Visual Basic.png'
import ADONET from './assets/tech_logo/ADO.NET.png'
import WebServices from './assets/tech_logo/Web Services.png'
import RESTAPI from './assets/tech_logo/REST API.png'
import WebAPI from './assets/tech_logo/Web API.png'
import ActiveX from './assets/tech_logo/ActiveX.png'
import AJAX from './assets/tech_logo/AJAX.png'
import jQuery from './assets/tech_logo/jQuery.png'
import plSql from './assets/tech_logo/plsql.png'
import Sql from './assets/tech_logo/sql.png'
import xml from './assets/tech_logo/XML.png'
import MsSql from './assets/tech_logo/Microsoft SQL Server.png'
import Oracle from './assets/tech_logo/Oracle.png'
import MSAccess from './assets/tech_logo/MS Access.png'
import toad from './assets/tech_logo/Toad.jfif'
import Vss from './assets/tech_logo/Vss.webp'
import Crystal from './assets/tech_logo/Crystal.jfif'

// Experience Section Logo's
import RRFin from './assets/company_logo/RRFin.jfif'
import Royal from './assets/company_logo/Royal.jfif'
import CSAT from './assets/company_logo/CSAT.jfif'

// Education Section Logo's
import uptu from './assets/education_logo/uptu.png'
import tmbu from './assets/education_logo/tmbu.jfif'

// Project Section Logo's
import rrfinance from './assets/work_logo/RRfinance.jpg'
import RROneSorce from './assets/work_logo/RROneSorce.jpg'
import RRmutualfund from './assets/work_logo/RRmutualfund.jpg'
import Apparel from './assets/work_logo/Apparel.png'
import Restaurant from './assets/work_logo/Restaurant.jpg'
import rrpolicy from './assets/work_logo/rrpolicy.jpg'

export const SkillsInfo = [
  {
    title: 'Technologies',
    skills: [
      { name: 'ASP.NET', logo: ASPNET },
      { name: 'VB.NET', logo: VBNET },
      { name: 'ADO.NET', logo: ADONET },
      { name: 'Web Services', logo: WebServices },
      { name: 'REST API', logo: RESTAPI },
      { name: 'Web API', logo: WebAPI },
      { name: 'ActiveX', logo: ActiveX },
      { name: 'AJAX', logo: AJAX },
      { name: 'jQuery', logo: jQuery },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'PL/SQL', logo: plSql },
      { name: 'Visual Basic 6.0', logo: VisualBasic },
      { name: 'SQL', logo: Sql },
      { name: 'HTML', logo: htmlLogo },
      { name: 'XML', logo: xml },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Microsoft SQL Server', logo: MsSql },
      { name: 'Oracle', logo: Oracle },
      { name: 'MS Access', logo: MSAccess },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'TOAD', logo: toad },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VSS 6.0', logo: Vss },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Crystal Report', logo: Crystal },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: RRFin,
    role: "Sr.Software Engineer & Tech Team Lead",
    company: "RR Financial Consultants Ltd",
    date: "Dec 2011 - Present",
    desc: "Lead and mentored teams in developing and maintaining financial applications, including Mutual Funds, FDs, and Insurance. Built a robust ERP system, integrated third-party APIs, optimized large SQL databases, and delivered dynamic reports using Crystal Reports. Collaborated on requirement analysis, testing, and reusable component development.",
    skills: [
      "VB6.0 / VB.NET",
      "ASP.NET",
      "SQL Server",
      "Crystal Reports 8.5",
      "Web APIs",
      "ActiveX Controls",
      "Visual Studio",
    ],
  },
  {
    id: 1,
    img: Royal,
    role: "Senior Software Engineer",
    company: "Royal Datamatics PVT. LTD",
    date: "Oct 2010 - Dec 2011",
    desc: "Designed and developed ERP modules for apparel industries covering procurement, production, budgeting, accounting, and export documentation. Created optimized PL/SQL procedures in Oracle9i, used TOAD for database management and VSS for version control. Collaborated directly with clients for requirement gathering, testing, and releasing updated ERP features to enhance operational efficiency.",
    skills: [
      "PL/SQL",
      "Oracle9i",
      "TOAD 6.3 (for Oracle)",
      "VSS 6.0",
      "Visual Basic 6.0",
      "Crystal Reports 8.5",
    ],
  },
  {
    id: 2,
    img: CSAT,
    role: "Software Engineer",
    company: "CSAT Systems. PVT. LTD",
    date: "May 2009 - July 2010",
    desc: "Designed and implemented Restaurant Management System (RMS) for POS terminals with both touch and non-touch interfaces. Developed master, tax, steward, and security modules using VB6.0 and MS Access/SQL Server. Integrated DOS and Windows-based reports, and managed complete RMS installations and deployments across various client locations.",
    skills: [
      "Visual Basic 6.0",
      "MS Access",
      "SQL Server",
      "Crystal Reports",
      "Windows XP",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: uptu,
    school: "AKTU, Lucknow",
    date: "Sept 2004 - Sept 2006",
    grade: "67.80%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Dr. A. P. J. Abdul Kalam Technical University, Lucknow. During my time at AKTU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AKTU has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: tmbu,
    school: "T.M.Bhagalpur University, Bhagalpur",
    date: "Sept 1998 - Dec 2002",
    grade: "67.75%",
    desc: "Pursued a rigorous undergraduate program focused on the fundamental and advanced principles of mathematics, including algebra, calculus, real and complex analysis, differential equations, and numerical methods. Gained a strong foundation in logical reasoning, abstract thinking, and quantitative analysis. The program emphasized both theoretical understanding and practical problem-solving, preparing me to apply mathematical concepts across diverse academic and real-world contexts. Actively engaged in independent study and collaborative projects that enhanced my analytical and research skills.",
    degree: "Bachelor of Science - BSC (Maths)",
  },
  
];

export const projects = [
  {
    id: 0,
    title: "RR Finance",
    description:
      "RRFinance.com is the official website of RR Group, a company dealing in a wide range of financial products like Mutual Funds, Fixed Deposits, Insurance, Equity, Commodities, and Depository Services, along with interests in art. The site serves both associates and investors, categorized by levels such as Branch, Relationship Manager, Sub-broker, and Client. Each level can view their business status and perform related operations. With around 300 reports and tools, the platform provides a complete overview of business activities and supports key financial processes online.",
    image: rrfinance,
    tags: ["Asp.net", "C#", "Web Services", "JavaScript", "XML", "Ado.Net", "Sql 2005/2012"],
    github: "#",
    webapp: "https://www.rrfinance.com/default.aspx",
  },
  {
    id: 1,
    title: "RR One Source(ERP)",
    description:
      "This ERP, developed by RRFCL, is a robust financial back-office system designed for the finance industry. It efficiently manages operations related to Mutual Funds, Fixed Deposits, IPOs, NCDs, and Insurance (Life and General). Widely used and fully operational, the ERP features multiple integrated modules such as the MF Module, FD Module, IPO/NCD Module, Mapping Module, Insurance Module, and NAV Module. Together, these modules provide seamless control over the entire financial workflow, making it a powerful solution for managing diverse financial services.",
    image: RROneSorce,
    tags: ["VB 6.0", "VB.net", "Crystal Report", "Sql Server 2012"],
    github: "#",
    // webapp: "#",
  },
  {
    id: 2,
    title: "RR Policy",
    description:
      "rrpolicy.com is the official website of RR Insurance Brokers Pvt. Ltd., offering a wide range of insurance and financial products such as health, life, motor, and travel insurance, along with mutual funds and fixed deposits. The platform enables users to compare policies, purchase insurance, renew plans, and file claims easily, making financial planning simple and accessible.",
    image: rrpolicy,
    tags: ["Asp.net", "C#", "Web Services", "JavaScript", "XML", "Ado.Net", "Sql 2005/2012"],
    github: "#",
    webapp: "https://www.rrpolicy.com/default.aspx",
  },
  {
    id: 3,
    title: "RR Finance(Online Mutual Fund Portal)",
    description:
      "The website was developed to enable investors to buy and sell mutual funds online across all major fund houses like HDFC, AXIS, and IDBI. New users can register and activate their accounts via email to start investing. The platform also provides customized reports showing the current value of investments based on live market data.",
    image: RRmutualfund,
    tags: ["Asp.net", "C#", "JavaScript", "XML", "Ado.Net", "Sql 2012"],
    github: "#",
    webapp: "https://www.rrfinance.com/OurProducts/MutualFund/default.aspx",
  },
  {
    id: 4,
    title: "Apparel Process Production System",
    description:
      "This ERP, developed by Royal Datamatics Pvt Ltd, is a comprehensive solution for the apparel industry, integrating order management, procurement, production, export documentation, budgeting, and financial accounting. It streamlines workflow by handling order entry, fabric tracking, inventory management, production progress, export paperwork, and financial records, ensuring seamless operations across the entire apparel supply chain.",
    image: Apparel,
    tags: ["Visual Basic 6.0", "Oracle9i", "Crystal Reports 8.5", "winXP", "VSS 6.0", "TOAD 6.3"],
    github: "#",
    webapp: "https://rdpl.com/apps.html",
  },
  {
    id: 5,
    title: "Restaurant Management System(RMS) Touch & NonTouch",
    description:
      "This POS software by Csat Systems Pvt Ltd supports restaurants, home delivery, and bars. It includes Transaction, Master, and Import & Export modules, handling orders, billing, POS setup, item categories, tax structures, and reports in DOS and Windows formats",
    image: Restaurant,
    tags: ["Visual Basic 8.5", "MS Access", "MS Sql Server 2000", "winXP"],
    github: "#",
    webapp: "https://csatspl.com/",
  },
  
];  