<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>菜 · CAI-OS · 个人生活看板</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="app">
  <!-- ============================================================
       左侧 Sidebar
       ============================================================ -->
  <aside class="sidebar">
    <!-- 品牌头 -->
    <div class="brand">
      <div class="brand-logo" id="brand-logo">菜</div>
      <div class="brand-text">
        <span class="brand-name" id="brand-name">菜</span>
        <span class="brand-sub" id="brand-sub">CAI-OS</span>
      </div>
    </div>

    <!-- 主导航 -->
    <nav class="nav">
      <div class="nav-item active">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
        </span>
        <span>今日</span>
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
        </span>
        <span>项目</span>
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg>
        </span>
        <span>大 TODO</span>
      </div>
      <div class="nav-item">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16v10H4z"/><path d="M4 6l8 6 8-6"/></svg>
        </span>
        <span>Waiting</span>
      </div>
    </nav>

    <!-- 领域 -->
    <div>
      <div class="side-group-title">领域</div>
      <div class="domain-list" id="side-domain-list"></div>
    </div>

    <!-- 今日负载 mini -->
    <div>
      <div class="side-group-title">今日负载</div>
      <div class="load-list">
        <div class="load-item">
          <span class="load-dot done"></span>
          <span class="domain-name">已完成</span>
          <span class="load-value" id="side-done">0</span>
        </div>
        <div class="load-item">
          <span class="load-dot"></span>
          <span class="domain-name">待推进</span>
          <span class="load-value" id="side-open">0</span>
        </div>
        <div class="load-item">
          <span class="load-dot wait"></span>
          <span class="domain-name">等待中</span>
          <span class="load-value" id="side-wait">0</span>
        </div>
      </div>
    </div>

    <!-- 底部工具 -->
    <div style="margin-top:auto;display:flex;flex-direction:column;gap:6px;">
      <button class="nav-item" style="text-align:left;" onclick="exportData()">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M6 9l6 6 6-6"/><path d="M4 21h16"/></svg>
        </span>
        <span>导出数据</span>
      </button>
      <button class="nav-item" style="text-align:left;" onclick="document.getElementById('import-file').click()">
        <span class="nav-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9"/><path d="M6 15l6-6 6 6"/><path d="M4 3h16"/></svg>
        </span>
        <span>导入数据</span>
      </button>
      <input type="file" id="import-file" accept=".json" style="display:none" onchange="importData(event)">
    </div>
  </aside>

  <!-- ============================================================
       主区
       ============================================================ -->
  <main class="main">

    <!-- ============ 顶行：时间轴 + 今日负载 ============ -->
    <div class="top-row">

      <!-- 今日时间轴 -->
      <section class="card timeline">
        <div class="card-head">
          <div class="card-head-left">
            <span class="card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
            </span>
            <span class="card-title">今日时间轴</span>
          </div>
          <span class="card-meta" id="timeline-meta">0 个时间块</span>
        </div>
        <div class="timeline-body" id="timeline-body"></div>
      </section>

      <!-- 今日负载 + Waiting 概览 -->
      <section class="card load-card">
        <div class="card-head">
          <div class="card-head-left">
            <span class="card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </span>
            <span class="card-title">今日负载</span>
          </div>
          <span class="card-meta" id="load-meta">0h00m</span>
        </div>

        <div class="load-metrics">
          <div class="metric">
            <div class="metric-value" id="metric-slots">0</div>
            <div class="metric-label">时间块</div>
          </div>
          <div class="metric">
            <div class="metric-value" id="metric-hours">0h</div>
            <div class="metric-label">已占用</div>
          </div>
          <div class="metric">
            <div class="metric-value" id="metric-done">0</div>
            <div class="metric-label">已完成</div>
          </div>
        </div>

        <div>
          <div class="load-sub-title">
            <span>等待中 · Waiting</span>
            <span id="waiting-count">0</span>
          </div>
          <div class="waiting-list" id="waiting-list"></div>
        </div>
      </section>
    </div>

    <!-- ============ 中行：今日任务池 ============ -->
    <section class="card task-pool-card">
      <div class="card-head">
        <div class="card-head-left">
          <span class="card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12l3 3 5-6"/></svg>
          </span>
          <span class="card-title">今日任务池</span>
        </div>
        <span class="card-meta" id="task-meta">今天没绑时间的事项</span>
      </div>
      <div id="task-list"></div>
    </section>

    <!-- ============ 项目推进 ============ -->
    <section class="card projects-section">
      <div class="card-head">
        <div class="card-head-left">
          <span class="card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
          </span>
          <span class="card-title">项目推进</span>
        </div>
        <span class="card-meta">按结果拆下一步</span>
      </div>
      <div class="projects-grid" id="projects-grid"></div>
    </section>

    <!-- ============ 领域仪表盘 ============ -->
    <section class="card domains-card">
      <div class="card-head">
        <div class="card-head-left">
          <span class="card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 6"/></svg>
          </span>
          <span class="card-title">领域仪表盘</span>
        </div>
        <span class="card-meta">责任领域 · 不是任务仓库</span>
      </div>
      <div class="domains-grid" id="domains-grid"></div>
    </section>

    <div class="footer" id="footer">— 向上 · 持续生长 —</div>
  </main>
</div>

<script src="dashboard-data.js"></script>
<script>
/* =================================================================
 * 渲染逻辑
 * ================================================================= */
const D = window.DASHBOARD_DATA;
const TODAY_KEY = new Date().toISOString().slice(0, 10);

/* ---- localStorage 状态：勾选完成 ---- */
function getState() {
  try {
    const raw = localStorage.getItem('dashboard-state-' + TODAY_KEY);
    return raw ? JSON.parse(raw) : { done_task_ids: [] };
  } catch (e) { return { done_task_ids: [] }; }
}
function setState(s) {
  localStorage.setItem('dashboard-state-' + TODAY_KEY, JSON.stringify(s));
}
function isDone(id) { return getState().done_task_ids.includes(id); }
function toggleDone(id) {
  const s = getState();
  const i = s.done_task_ids.indexOf(id);
  if (i >= 0) s.done_task_ids.splice(i, 1); else s.done_task_ids.push(id);
  setState(s);
  render();
}

/* ---- 品牌头 ---- */
function renderBrand() {
  document.getElementById('brand-logo').textContent = D.meta.brand_short || '菜';
  document.getElementById('brand-name').textContent = D.meta.owner || '菜';
  document.getElementById('brand-sub').textContent = D.meta.brand_long || 'CAI-OS';
  document.getElementById('footer').textContent = '— ' + (D.meta.greeting || '向上') + ' · 持续生长 —';
}

/* ---- 侧栏：领域列表 ---- */
function renderSideDomains() {
  const el = document.getElementById('side-domain-list');
  el.innerHTML = '';
  (D.domains || []).forEach(dom => {
    const count = D.projects.filter(p => p.domain === dom.id).length;
    const row = document.createElement('div');
    row.className = 'domain-item';
    row.innerHTML = `
      <span class="domain-dot ${dom.color_token}"></span>
      <span class="domain-name">${dom.name}</span>
      <span class="domain-count">${count}</span>
    `;
    el.appendChild(row);
  });
}

/* ---- 时间轴 ---- */
function renderTimeline() {
  const body = document.getElementById('timeline-body');
  const meta = document.getElementById('timeline-meta');
  body.innerHTML = '';

  const events = D.timeline || [];
  meta.textContent = events.length + ' 个时间块';

  if (events.length === 0) {
    body.innerHTML = `
      <div class="timeline-empty">
        今日时间轴还是空的<br>
        <span style="font-size:12px;color:var(--text-tertiary);opacity:0.7;">告诉我几点做什么，我会填进来</span>
      </div>
    `;
    return;
  }

  // 按 hour_start 或 order 排序
  const sorted = [...events].sort((a, b) => {
    const ha = a.hour_start != null ? a.hour_start : 99;
    const hb = b.hour_start != null ? b.hour_start : 99;
    return ha - hb;
  });

  // 每个 event 一个 slot
  sorted.forEach(ev => {
    const slot = document.createElement('div');
    slot.className = 'timeline-slot';
    const hour = ev.hour_start != null
      ? String(ev.hour_start).padStart(2, '0') + ':00'
      : ev.hour_label || '待安排';

    const done = isDone(ev.id);
    const color = ev.color_token || 'sage';
    slot.innerHTML = `
      <span class="slot-hour">${hour}</span>
      <div class="event color-${color} ${done ? 'done' : ''}" onclick="toggleDone('${ev.id}')">
        <div class="event-body">
          <div class="event-title">${escapeHtml(ev.title)}</div>
          <div class="event-tags">
            ${ev.project_name ? `<span class="tag">${escapeHtml(ev.project_name)}</span>` : ''}
            ${ev.tag ? `<span class="tag">${escapeHtml(ev.tag)}</span>` : ''}
          </div>
        </div>
        <div class="event-hour">${ev.duration || ''}</div>
      </div>
    `;
    body.appendChild(slot);
  });
}

/* ---- 任务池 ---- */
function renderTasks() {
  const el = document.getElementById('task-list');
  const meta = document.getElementById('task-meta');
  el.innerHTML = '';
  const tasks = D.tasks || [];
  meta.textContent = tasks.length + ' 项待推进';

  if (tasks.length === 0) {
    el.innerHTML = `
      <div class="pool-empty">
        任务池空着 · 从大 TODO 挑今日事项填进来
      </div>
    `;
    return;
  }

  const list = document.createElement('div');
  list.className = 'task-list';
  tasks.forEach(t => {
    const done = isDone(t.id);
    const row = document.createElement('div');
    row.className = 'task-item' + (done ? ' done' : '');
    row.onclick = () => toggleDone(t.id);
    row.innerHTML = `
      <span class="task-check"></span>
      <span class="task-title">${escapeHtml(t.title)}</span>
      ${t.project_name ? `<span class="task-project-tag">${escapeHtml(t.project_name)}</span>` : ''}
    `;
    list.appendChild(row);
  });
  el.appendChild(list);
}

/* ---- 项目卡 ---- */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  D.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-token', p.color_token || 'sage');
    if (p.is_master_todo) card.classList.add('is-master');

    const percent = (p.progress_percent != null) ? p.progress_percent : null;
    const stageText = p.stage || '—';
    const label = p.short_label || (p.name || '').slice(0, 1);

    const waitBadge = (p.waiting && p.waiting.length > 0)
      ? `<span class="project-waiting-badge">Waiting ${p.waiting.length}</span>`
      : '';

    const subtaskHtml = (p.subtasks && p.subtasks.length > 0) ? `
      <div class="project-subtasks">
        ${p.subtasks.map(s => `
          <div class="subtask-dot ${s.done ? 'done' : ''}">
            <span class="dot"></span>
            <span class="subtask-label">${escapeHtml(s.title)}</span>
          </div>
        `).join('')}
      </div>` : '';

    const rightSide = (percent != null)
      ? `<span class="project-percent">${percent}%</span>`
      : `<span class="project-stage">${escapeHtml(stageText)}</span>`;

    const progressBar = (percent != null) ? `
      <div class="project-progress">
        <div class="project-progress-fill" style="width:${percent}%"></div>
      </div>` : '';

    const masterHint = p.is_master_todo ? `
      <div class="master-hint">大台账入口 · 从这里挑今日事项到任务池</div>` : '';

    const nextStep = p.next_step
      ? `<span class="next-value">${escapeHtml(p.next_step)}</span>`
      : `<span class="next-value empty">下一步待定</span>`;

    card.innerHTML = `
      ${waitBadge}
      <div class="project-card-head">
        <div class="project-card-left">
          <span class="project-icon ${label.length >= 3 ? 'small-text' : ''}" data-token="${p.color_token}">${escapeHtml(label)}</span>
          <span class="project-name" title="${escapeHtml(p.name)}">${escapeHtml(p.name)}</span>
        </div>
        ${rightSide}
      </div>
      ${progressBar}
      ${subtaskHtml}
      ${masterHint}
      <div class="project-next">
        <span class="next-label">下一步</span>
        ${nextStep}
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---- Waiting 汇总 ---- */
function renderWaiting() {
  const list = document.getElementById('waiting-list');
  const cnt = document.getElementById('waiting-count');
  list.innerHTML = '';

  const items = [];
  D.projects.forEach(p => {
    (p.waiting || []).forEach(w => {
      items.push({ ...w, project_name: p.name, project_id: p.id });
    });
  });
  cnt.textContent = items.length;
  document.getElementById('side-wait').textContent = items.length;

  if (items.length === 0) {
    list.innerHTML = `<div class="waiting-empty">目前没有等待中的事项</div>`;
    return;
  }

  items.forEach(w => {
    const days = w.since ? daysSince(w.since) : null;
    const el = document.createElement('div');
    el.className = 'waiting-item';
    el.innerHTML = `
      <div class="waiting-item-title">${escapeHtml(w.item)}</div>
      <div class="waiting-item-meta">
        ${w.whom ? `<span class="whom">等 ${escapeHtml(w.whom)}</span>` : ''}
        <span>${escapeHtml(w.project_name)}</span>
        ${days != null ? `<span>· 已等 ${days} 天</span>` : ''}
      </div>
    `;
    list.appendChild(el);
  });
}

/* ---- 领域仪表盘 ---- */
function renderDomainsGrid() {
  const grid = document.getElementById('domains-grid');
  grid.innerHTML = '';
  (D.domains || []).forEach(dom => {
    const projs = D.projects.filter(p => p.domain === dom.id);
    const waitingCnt = projs.reduce((n, p) => n + (p.waiting?.length || 0), 0);
    const cell = document.createElement('div');
    cell.className = 'domain-cell';
    cell.innerHTML = `
      <div class="domain-ring" data-token="${dom.color_token}">${escapeHtml(dom.icon_glyph || '·')}</div>
      <div class="domain-cell-name">${escapeHtml(dom.name)}</div>
      <div class="domain-cell-stat">
        ${projs.length} 个项目<br>
        ${waitingCnt} 项 Waiting
      </div>
    `;
    grid.appendChild(cell);
  });
}

/* ---- 顶部大数字负载 ---- */
function renderMetrics() {
  const events = D.timeline || [];
  const tasks = D.tasks || [];
  const state = getState();

  const slots = events.length;
  const doneCnt = state.done_task_ids.filter(id =>
    events.some(e => e.id === id) || tasks.some(t => t.id === id)
  ).length;

  // 已占用时长（h）
  let mins = 0;
  events.forEach(e => {
    if (e.hour_start != null && e.hour_end != null) {
      mins += (e.hour_end - e.hour_start) * 60;
    } else if (e.duration_minutes) {
      mins += e.duration_minutes;
    }
  });
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hoursText = mins > 0 ? `${h}h${m > 0 ? String(m).padStart(2,'0') : ''}` : '0h';

  document.getElementById('metric-slots').textContent = slots;
  document.getElementById('metric-hours').textContent = hoursText;
  document.getElementById('metric-done').textContent = doneCnt;
  document.getElementById('load-meta').textContent = hoursText;

  document.getElementById('side-done').textContent = doneCnt;
  document.getElementById('side-open').textContent = (slots + tasks.length) - doneCnt;
}

/* ---- utils ---- */
function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function daysSince(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  const now = new Date();
  return Math.max(0, Math.floor((now - d) / (1000 * 60 * 60 * 24)));
}

/* ---- 导出 / 导入 ---- */
function exportData() {
  const payload = { data: D, state: getState(), exported_at: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dashboard-${TODAY_KEY}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
function importData(evt) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const payload = JSON.parse(e.target.result);
      if (payload.state) setState(payload.state);
      if (payload.data) window.DASHBOARD_DATA = payload.data;
      render();
      alert('导入完成');
    } catch (err) { alert('导入失败: ' + err.message); }
  };
  reader.readAsText(file);
}

/* ---- 主渲染 ---- */
function render() {
  renderBrand();
  renderSideDomains();
  renderTimeline();
  renderTasks();
  renderProjects();
  renderWaiting();
  renderDomainsGrid();
  renderMetrics();
}
render();
</script>

</body>
</html>
