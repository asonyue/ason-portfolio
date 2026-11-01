import { flowline, zeroTrust, type Project, type ProjectImage } from './projects';
import type { Locale } from './site-copy';

type ImageText = Pick<ProjectImage, 'title' | 'alt' | 'caption'>;
const flowlineImageText: Record<string, ImageText> = {
  '/projects/flowline/TransactionPage.png': {
    title: '記錄日常收支',
    alt: 'Flowline 示範帳戶的交易頁面，顯示每月現金流、收入與支出總額，以及分類交易紀錄。',
    caption: '交易頁面整合每月的分類收入與支出紀錄。現金流總額呈現已記錄的資金變動；剩餘可花金額則由另外的消費計畫計算。',
  },
  '/projects/flowline/SpendingPlan.png': {
    title: '規劃剩餘可花金額',
    alt: 'Flowline 消費計畫頁面，顯示本月剩餘可花金額、已花金額、資金安排入口與各分類額度。',
    caption: '消費計畫比較實際支出與每月可花額度，並呈現各分類的分配情形。資金安排會納入預期收入、自行撥用的存款、固定付款、儲蓄、投資與信用卡另需預留金額。',
  },
  '/projects/flowline/SavingPlan.png': {
    title: '串連每月儲蓄與長期目標',
    alt: 'Flowline 儲蓄計畫頁面，顯示已確認的每月儲蓄進度、我的罐子入口，以及已完成的緊急預備金存款安排。',
    caption: '每月安排追蹤已確認的儲蓄與投資轉入，並透過「我的罐子」連結緊急預備金、旅遊等長期目標。罐子是對既有帳戶資金的用途分配，不會增加淨資產。',
  },
  '/projects/flowline/AssetPage.png': {
    title: '檢視資產、負債與淨資產',
    alt: 'Flowline 資產總覽頁面，顯示淨資產、與上月底的差異、流動資金、投資及負債。',
    caption: '資產總覽分別呈現流動資金、投資與負債，說明已記錄的淨資產組成。月份切換可回顧歷史狀況，帳戶明細則提供交易總額以外的財務脈絡。',
  },
  '/projects/flowline/FlowmiaiPage.png': {
    title: '請 Flowmi 解讀財務紀錄',
    alt: 'Flowmi 以繁體中文分析示範月份的收入、支出、主要支出分類與可能的節省方式。',
    caption: '使用者以自然語言提問，Flowmi 根據已記錄的資料整理每月總額、主要支出分類與實用建議。財務工具負責查詢資料與執行計算，不會修改財務紀錄。',
  },
};

const flowlineZh: Project = {
  ...flowline,
  subtitle: '個人財務管理與 AI 助理',
  type: '獨立專案',
  timeline: '2026 年 5 月 – 至今',
  summary: '串連日常記帳、每月資金規劃、儲蓄目標與資產管理，協助使用者理解剩餘可花金額，並透過 Flowmi AI 探索自己的財務紀錄。',
  role: '獨立產品規劃、財務規則設計、AI 輔助開發與端到端驗證',
  images: flowline.images.map((image) => ({ ...image, ...flowlineImageText[image.src] })),
  mediaTitle: '產品操作導覽',
  mediaDescription: '透過五個畫面，了解交易記錄、每月規劃、儲蓄、資產管理與 Flowmi 分析如何串連。截圖使用虛構的示範資料，呈現繁體中文介面；Flowline 同時支援英文。',
  demo: flowline.demo ? { ...flowline.demo, label: '開啟示範網站' } : undefined,
  sections: [
    {
      id: 'overview', title: '專案簡介',
      paragraphs: ['Flowline 是一款個人財務管理網頁應用程式，整合日常收支記錄、每月規劃、儲蓄目標與 AI 輔助財務分析。它協助使用者從記錄交易，進一步判斷可以花多少、存多少，以及需要預留多少資金。'],
    },
    {
      id: 'challenge', title: '問題與挑戰',
      paragraphs: ['收入減去支出，無法完整說明所有財務承諾。信用卡付款義務、固定付款、預計儲蓄與投資，都會影響日常可花金額。我希望將這些資訊串成同一個流程，讓過去的交易紀錄也能支援未來的資金安排。'],
    },
    {
      id: 'role', title: '我的角色',
      paragraphs: ['我獨立規劃並運用 AI 程式開發工具完成 Flowline。我負責界定財務管理問題、定義需求與商業規則、設計使用流程，以及做出產品與技術決策。', '我使用 Codex 輔助程式實作，並持續負責開發方向、行為檢查，以及透過實際使用與測試驗證產品。這個專案結合產品負責經驗、資料解讀、AI 實務應用與端到端交付。'],
    },
    {
      id: 'solution', title: '產品功能如何串連',
      paragraphs: ['應用程式將已記錄的收支活動與未來的資金規劃串連。使用者可比較支出與分配額度、追蹤目標、了解整體財務狀況，再透過 Flowmi 延伸提問。'],
      steps: [
        { title: '記錄資金變動', description: '記錄並分類收入與支出，選擇付款帳戶，並回顧交易歷史。' },
        { title: '建立每月計畫', description: '將預期收入與自行撥用的存款，分配至固定付款、儲蓄、投資、信用卡預留與日常消費。' },
        { title: '追蹤消費與儲蓄', description: '比較分類額度與實際支出、確認儲蓄存入，並以罐子為既有帳戶資金設定目標用途。' },
        { title: '檢視與探索', description: '檢視帳戶、負債、淨資產、趨勢與歷史月份，再請 Flowmi 解釋已記錄的資訊。' },
      ],
    },
    {
      id: 'financial-rules', title: '介面背後的財務規則',
      paragraphs: ['產品的核心在於清楚區分幾個財務概念。這些區分影響規劃邏輯，也決定系統如何向使用者解釋結果。'],
      bullets: [
        '每月可規劃資金結合預期收入與自行撥用的存款，與目前銀行帳戶餘額不同。',
        '剩餘可花金額同時反映計畫中的承諾與實際日常支出，不等於收入減去支出。',
        '信用卡消費列為支出；繳款屬於轉帳，不應再次列為支出。另需預留金額會考量計畫尚未涵蓋的付款義務。',
        '儲蓄罐子為帳戶內已有的資金指定用途，在追蹤目標的同時，不會增加淨資產。',
        '當月信用卡預留金額採動態計算；歷史月份則使用已儲存的計畫資訊，保留當時的財務脈絡。',
      ],
    },
    {
      id: 'flowmi', title: 'Flowmi 如何運作',
      paragraphs: ['Flowmi 透過 OpenRouter 串接生成式 AI 模型。使用者以自然語言提問後，模型會從四個應用程式定義的工具中，選擇適合的工具查詢資訊或執行計算。', '後端驗證工具參數、執行查詢與計算，並管理執行限制、錯誤處理、回應結構、對話儲存與上下文。結果可用於文字解釋與財務視覺化；財務工具僅供讀取與分析，不會修改紀錄。'],
      bullets: [
        'query_transactions — 查詢交易、總額、趨勢與支出分類。',
        'query_budgets — 查詢分配額度、使用情形與剩餘可花金額。',
        'query_assets — 查詢帳戶餘額、資產、負債與儲蓄罐子資訊。',
        'calculate — 根據提供的財務資訊，在應用程式設定的範圍內執行計算。',
      ],
    },
    {
      id: 'technology', title: '技術與實作',
      paragraphs: ['Next.js 同時提供前端與後端，透過 React 與 TypeScript 將介面連結至應用程式的商業邏輯。PostgreSQL 與 Prisma 負責資料儲存與存取。應用程式支援台灣繁體中文與英文。'],
      bullets: [
        '介面與視覺化：使用 Tailwind CSS 與 Recharts 呈現規劃畫面、收支趨勢、分類明細、資產配置，以及投資市值與投入成本的比較。',
        '後端：Next.js API 路由在 Node.js 上執行，搭配 TypeScript 商業邏輯與 Zod 驗證。',
        'AI 整合：透過 OpenRouter 連結生成式 AI 模型與應用程式控制的財務工具。',
        '部署：使用 Docker 封裝應用程式，並部署於 Railway。',
      ],
    },
    {
      id: 'validation', title: '驗證與成果',
      paragraphs: ['我透過日常使用與測試驗證應用程式，重點在於交易紀錄、資金計畫、儲蓄安排與財務解釋是否保持一致，並持續找出問題、調整產品行為。', 'Flowline 將問題定義、財務資料解讀、流程設計與 AI 輔助實作，整合為可運作的獨立應用程式。下方截圖以虛構財務資料展示現有功能。'],
    },
  ],
};

const zeroTrustZh: Project = {
  ...zeroTrust,
  name: '零信任', subtitle: '成熟度評估系統', type: 'Systex 實習・團隊專案', timeline: '2025 年',
  summary: '由實習團隊共同開發的平台，將資安問卷、佐證資料、審查與報告整合為協作式評估流程。',
  role: '參與團隊開發、系統測試、API 驗證、文件撰寫、交接與產品介紹影片製作',
  video: zeroTrust.video ? { ...zeroTrust.video, label: '觀看產品介紹影片' } : undefined,
  demo: zeroTrust.demo ? { ...zeroTrust.demo, label: '開啟示範網站' } : undefined,
  sections: [
    { id: 'overview', title: '專案簡介', paragraphs: ['在 Systex Corporation 擔任資安顧問實習生期間，我參與團隊專案，將零信任成熟度評估流程數位化。平台旨在改善顧問與客戶於評估各階段的協作。'] },
    { id: 'challenge', title: '問題與挑戰', paragraphs: ['人工評估容易讓問卷回覆、佐證資料與審查意見散落在不同檔案及對話中。重複追蹤、評分與報告準備，也讓評估進度較難掌握。'] },
    { id: 'role', title: '我的角色', paragraphs: ['我參與團隊系統開發、協助系統測試與 API 驗證，並支援技術文件與交接工作。我也製作了產品介紹影片。', '平台由實習團隊共同開發。以下功能描述的是團隊解決方案，個人貢獻則以測試、驗證、文件與影片等工作為主。'] },
    {
      id: 'solution', title: '解決方案設計',
      paragraphs: ['平台集中管理問卷與佐證資料，並區分客戶和顧問角色。審查與評分流程將輸入資料連結至視覺化分析與可下載的報告。'],
      steps: [
        { title: '蒐集資料', description: '客戶在共用平台填寫問卷，並上傳佐證資料。' },
        { title: '審查與評分', description: '顧問審查提交內容，並進行評估回覆的評分。' },
        { title: '溝通結果', description: '透過雷達圖、長條圖、成熟度落差分析與可下載報告，彙整評估結果。' },
      ],
    },
    { id: 'technology', title: '技術與實作', paragraphs: ['團隊使用 Python 與 Django 開發網頁應用程式，以 MySQL 儲存資料，並使用 Postman 驗證 API。我透過測試與文件工作，協助將評估需求落實為可使用的系統，並支援交接。'] },
    { id: 'validation', title: '驗證與成果', paragraphs: ['我的貢獻包含系統測試、API 驗證與技術交接資料。這個專案呈現顧問工作流程如何轉化為數位系統，以及驗證工作如何支援實作。', '團隊平台將問卷、佐證資料、評分與報告整合為共用流程。下方產品介紹影片說明系統與預期的評估方式。'] },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return locale === 'zh-TW' ? [flowlineZh, zeroTrustZh] : [flowline, zeroTrust];
}

export function getProject(slug: Project['slug'], locale: Locale): Project {
  return getProjects(locale).find((project) => project.slug === slug)!;
}
