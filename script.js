const publications = [
  {
    year: 2026,
    title:
      "Design of a bispecific peptide-nanozyme conjugate for cancer immunotherapy",
    journal: "Cell Reports Medicine"
  },
  {
    year: 2026,
    title:
      "Degradation of membrane and extracellular DDR1 by a peptide-based LYTAC to overcome immune exclusion for cancer immunotherapy",
    journal: "Acta Pharmaceutica Sinica B"
  },
  {
    year: 2025,
    title:
      "A covalent peptide-based lysosome-targeting protein degradation platform for cancer immunotherapy",
    journal: "Nature Communications"
  },
  {
    year: 2025,
    title: "Chidamide functions as a VISTA/PSGL-1 blocker for cancer immunotherapy",
    journal: "Cancer Immunology, Immunotherapy"
  },
  {
    year: 2025,
    title:
      "Development of a Cascade-Targeting Oral Vaccine via Glycoprotein 2 on Intestinal Microfold Cells for Cancer Immunotherapy",
    journal: "Nano Letters"
  },
  {
    year: 2025,
    title: "DON-Loaded Nanodrug-T Cell Conjugates With PD-L1 Blockade for Solid Tumor Therapy",
    journal: "Advanced Science"
  },
  {
    year: 2025,
    title: "CELLECT: contrastive embedding learning for large-scale efficient cell tracking",
    journal: "Nature Methods"
  },
  {
    year: 2025,
    title: "An oral vaccine based on stable peptide-chitosan conjugate targeting DEC-205 for cancer immunotherapy",
    journal: "Journal of Controlled Release"
  },
  {
    year: 2024,
    title:
      "Fish oil-based microemulsion can efficiently deliver oral peptide blocking PD-1/PD-L1 and simultaneously induce ferroptosis for cancer immunotherapy",
    journal: "Journal of Controlled Release"
  },
  {
    year: 2024,
    title:
      "An integrated framework for prognosis prediction and drug response modeling in colorectal liver metastasis drug discovery",
    journal: "Journal of Translational Medicine"
  },
  {
    year: 2023,
    title:
      "Integrative analysis of bulk and single-cell gene expression profiles to identify tumor-associated macrophage-derived CCL18 as a therapeutic target of esophageal squamous cell carcinoma",
    journal: "Journal of Experimental & Clinical Cancer Research"
  },
  {
    year: 2023,
    title:
      "Design of a novel chimeric peptide via dual blockade of CD47/SIRPa and PD-1/PD-L1 for cancer immunotherapy",
    journal: "Science China Life Sciences"
  }
];

const yearlyCounts = {
  2012: 1,
  2018: 2,
  2019: 4,
  2020: 5,
  2021: 7,
  2022: 3,
  2023: 5,
  2024: 2,
  2025: 7,
  2026: 2
};

const repos = [
  {
    name: "HyperSCA",
    url: "https://github.com/luvega/HyperSCA",
    desc: "Source code for HyperSCA framework",
    lang: "Python",
    updated: "2026-03-03"
  },
  {
    name: "iodraw-files",
    url: "https://github.com/luvega/iodraw-files",
    desc: "流程图、思维导图、在线图表等文件模板",
    lang: "Template",
    updated: "2025-03-11"
  },
  {
    name: "itmtogpx",
    url: "https://github.com/luvega/itmtogpx",
    desc: "Automatically exported from code.google.com/p/itmtogpx",
    lang: "C#",
    updated: "2016-02-27"
  }
];

const totalPapersFromEnw = 38;
const defaultAcademicProfile = {
  orcid: "0000-0001-6076-4318",
  scopusAuthorId: "36164687900",
  researcherId: "B-9675-2008",
  orcidWorks: 49,
  orcidEmployment: 3,
  orcidEducation: 1,
  scholarKeywords: ["Bioinformatics", "Oncology", "Immunology", "Computational Biology"],
  links: {
    github: "https://github.com/luvega",
    scholar: "https://scholar.google.com/citations?user=IkVBcz4AAAAJ&hl=zh-CN",
    researchgate: "https://www.researchgate.net/profile/Xinghua-Sui?ev=hdr_xprf",
    orcid: "https://orcid.org/0000-0001-6076-4318"
  },
  scholarHighlights: [
    {
      title:
        "Direct and indirect effects of climate on richness drive the latitudinal diversity gradient in forest trees",
      citations: 161
    },
    {
      title:
        "Arbuscular mycorrhizal trees influence the latitudinal beta-diversity gradient of tree communities in forests worldwide",
      citations: 99
    }
  ],
  updatedAt: "-"
};

function setYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function renderHome() {
  const paperCount = document.getElementById("paper-count");
  const yearSpan = document.getElementById("year-span");
  const recentCount = document.getElementById("recent-count");
  const timeline = document.getElementById("progress-timeline");
  if (!timeline || !paperCount || !yearSpan || !recentCount) return;

  paperCount.textContent = `${totalPapersFromEnw}+`;
  yearSpan.textContent = "2012-2026";
  const lastThreeYears = publications.filter((p) => p.year >= 2024).length;
  recentCount.textContent = String(lastThreeYears);

  const progress = [
    {
      time: "2026",
      text:
        "在 Cell Reports Medicine 与 Acta Pharmaceutica Sinica B 发表多肽免疫治疗新进展，推进双特异策略与免疫排斥逆转方向。"
    },
    {
      time: "2025",
      text:
        "围绕口服疫苗、蛋白降解平台与免疫协同治疗形成连续产出，覆盖 Nano Letters、Nature Communications 等期刊。"
    },
    {
      time: "2024-2028（在研）",
      text:
        "主持深圳市自然科学基金项目，构建生成式 AI 与结构预测融合的高亲和力多肽筛选平台。"
    },
    {
      time: "2024-2026（在研）",
      text:
        "主持广东省基金项目，聚焦结直肠癌微环境细胞通讯靶点与药物筛选研究。"
    },
    {
      time: "2023",
      text:
        "完成食管鳞癌肿瘤相关巨噬细胞 CCL18 靶向研究，强化单细胞与 bulk 数据融合分析路径。"
    }
  ];

  timeline.innerHTML = progress
    .map(
      (item) => `
      <article class="timeline-item">
        <div class="meta">${item.time}</div>
        <div>${item.text}</div>
      </article>
    `
    )
    .join("");
}

function renderWorks() {
  const featured = document.getElementById("featured-papers");
  const bars = document.getElementById("yearly-bars");
  const repoList = document.getElementById("repo-list");
  if (!featured || !bars || !repoList) return;

  featured.innerHTML = publications
    .slice(0, 8)
    .map(
      (p) => `
      <article class="paper-item">
        <div class="year">${p.year} | ${p.journal}</div>
        <div>${p.title}</div>
      </article>
    `
    )
    .join("");

  const max = Math.max(...Object.values(yearlyCounts));
  bars.innerHTML = Object.entries(yearlyCounts)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(
      ([year, count]) => `
      <div class="bar-row">
        <strong>${year}</strong>
        <div class="bar"><span style="width:${Math.round((count / max) * 100)}%"></span></div>
        <span>${count} 篇</span>
      </div>
    `
    )
    .join("");

  repoList.innerHTML = repos
    .map(
      (repo) => `
      <article class="repo-item">
        <h3><a href="${repo.url}" target="_blank" rel="noopener">${repo.name}</a></h3>
        <div>${repo.desc}</div>
        <div class="meta">${repo.lang} | 最近更新：${repo.updated}</div>
      </article>
    `
    )
    .join("");
}

function renderAcademicProfile(profile) {
  const orcidNode = document.getElementById("orcid-id");
  const scopusNode = document.getElementById("scopus-id");
  const researcherNode = document.getElementById("researcher-id");
  const worksNode = document.getElementById("orcid-works");
  const updatedNode = document.getElementById("profile-updated-at");

  if (orcidNode) orcidNode.textContent = profile.orcid;
  if (scopusNode) scopusNode.textContent = profile.scopusAuthorId;
  if (researcherNode) researcherNode.textContent = profile.researcherId;
  if (worksNode) worksNode.textContent = String(profile.orcidWorks);
  if (updatedNode) updatedNode.textContent = `学术档案更新时间：${profile.updatedAt}`;

  const profileLinks = document.getElementById("profile-links");
  if (profileLinks) {
    profileLinks.innerHTML = `
      <li>Google Scholar：<a href="${profile.links.scholar}" target="_blank" rel="noopener">Xinghua Sui</a></li>
      <li>ResearchGate：<a href="${profile.links.researchgate}" target="_blank" rel="noopener">Xinghua Sui</a></li>
      <li>GitHub：<a href="${profile.links.github}" target="_blank" rel="noopener">luvega</a></li>
      <li>ORCID：<a href="${profile.links.orcid}" target="_blank" rel="noopener">${profile.orcid}</a></li>
      <li>Scopus Author ID：${profile.scopusAuthorId}</li>
      <li>ResearcherID：${profile.researcherId}</li>
      <li><a href="cv.pdf" target="_blank" rel="noopener">简历（PDF）</a></li>
    `;
  }

  const summaryList = document.getElementById("academic-summary-list");
  if (summaryList) {
    summaryList.innerHTML = `
      <li>Google Scholar 页面显示机构为 ${profile.affiliation}，且为 mail.sysu.edu.cn 邮箱验证。</li>
      <li>Scholar 研究关键词：${profile.scholarKeywords.join("、")}。</li>
      <li>ORCID 公开记录：Employment ${profile.orcidEmployment} 条、Education ${profile.orcidEducation} 条、Works ${profile.orcidWorks} 条。</li>
    `;
  }

  const worksProfileLinks = document.getElementById("works-profile-links");
  if (worksProfileLinks) {
    worksProfileLinks.innerHTML = `
      <li>Google Scholar：<a href="${profile.links.scholar}" target="_blank" rel="noopener">Xinghua Sui</a></li>
      <li>ResearchGate：<a href="${profile.links.researchgate}" target="_blank" rel="noopener">Xinghua Sui</a></li>
      <li>ORCID：<a href="${profile.links.orcid}" target="_blank" rel="noopener">${profile.orcid}</a></li>
      <li>本站数据来源：Publications.enw、cv.pdf、GitHub 公开仓库信息；ResearchGate/Scholar/ORCID 作为外部学术档案入口。</li>
    `;
  }

  const publicMetrics = document.getElementById("public-academic-metrics");
  if (publicMetrics) {
    const highlights = profile.scholarHighlights
      .map((item) => `${item.title}（${item.citations}）`)
      .join("；");
    publicMetrics.innerHTML = `
      <li>ORCID 公开 Works：${profile.orcidWorks}；Employment：${profile.orcidEmployment}；Education：${profile.orcidEducation}。</li>
      <li>ORCID Other IDs：Scopus Author ID ${profile.scopusAuthorId}，ResearcherID ${profile.researcherId}。</li>
      <li>Google Scholar 高被引论文示例：${highlights}。</li>
      <li>注：Scholar 页面可能存在动态加载限制，请以原页面显示为准。</li>
    `;
  }
}

async function initAcademicProfile() {
  try {
    const response = await fetch("data/profile.json", { cache: "no-store" });
    if (!response.ok) throw new Error("profile fetch failed");
    const profile = await response.json();
    renderAcademicProfile({ ...defaultAcademicProfile, ...profile });
  } catch (_error) {
    renderAcademicProfile(defaultAcademicProfile);
  }
}

setYear();
renderHome();
renderWorks();
initAcademicProfile();
