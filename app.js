/* ============================================================
   GreenTrackz - Shared App Data Layer
   Stores: transactions, categories, budgets in localStorage
   ============================================================ */

const GT = {
  MAX_TRANSACTIONS: 300,
  PER_PAGE: 10,

  // ── Default Categories ──────────────────────────────────────
  DEFAULT_CATEGORIES: [
    { id: 'makanan',      name: 'Makanan',      color: '#16A34A', bg: '#DCFCE7', icon: 'makanan'      },
    { id: 'transportasi', name: 'Transportasi', color: '#2563EB', bg: '#DBEAFE', icon: 'transportasi' },
    { id: 'belanja',      name: 'Belanja',      color: '#7C3AED', bg: '#EDE9FE', icon: 'belanja'      },
    { id: 'hiburan',      name: 'Hiburan',      color: '#DB2777', bg: '#FCE7F3', icon: 'hiburan'      },
    { id: 'kesehatan',    name: 'Kesehatan',    color: '#DC2626', bg: '#FEE2E2', icon: 'kesehatan'    },
    { id: 'tagihan',      name: 'Tagihan',      color: '#D97706', bg: '#FEF3C7', icon: 'tagihan'      },
    { id: 'edukasi',      name: 'Edukasi',      color: '#0891B2', bg: '#CFFAFE', icon: 'edukasi'      },
  ],

  // ── Storage helpers ─────────────────────────────────────────
  getTransactions() {
    try { return JSON.parse(localStorage.getItem('gt_transactions') || '[]'); }
    catch { return []; }
  },
  saveTransactions(arr) {
    localStorage.setItem('gt_transactions', JSON.stringify(arr));
  },

  getCategories() {
    try {
      const saved = JSON.parse(localStorage.getItem('gt_categories') || 'null');
      return saved || JSON.parse(JSON.stringify(this.DEFAULT_CATEGORIES));
    } catch { return JSON.parse(JSON.stringify(this.DEFAULT_CATEGORIES)); }
  },
  saveCategories(arr) {
    localStorage.setItem('gt_categories', JSON.stringify(arr));
  },

  getBudgets() {
    try { return JSON.parse(localStorage.getItem('gt_budgets') || '[]'); }
    catch { return []; }
  },
  saveBudgets(arr) {
    localStorage.setItem('gt_budgets', JSON.stringify(arr));
  },

  // ── Total Budget (income pool) ──────────────────────────────
  getTotalBudget() {
    try { return parseFloat(localStorage.getItem('gt_total_budget') || '0'); }
    catch { return 0; }
  },
  saveTotalBudget(amount) {
    localStorage.setItem('gt_total_budget', String(amount));
  },

  // ── Icon SVG map ────────────────────────────────────────────
  getCategoryIcon(iconKey, color, size = '20px') {
    const s = `width:${size};height:${size}`;
    const icons = {
      makanan: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
      transportasi: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
      belanja: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
      hiburan: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      kesehatan: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      tagihan: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      edukasi: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      pendapatan: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      dompet: `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${s}"><path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/><path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/></svg>`,
    };
    return icons[iconKey] || icons['dompet'];
  },

  // ── Format currency ─────────────────────────────────────────
  formatRp(amount) {
    return 'Rp ' + Math.abs(amount).toLocaleString('id-ID');
  },

  // ── Get category by id ──────────────────────────────────────
  getCategoryById(id) {
    return this.getCategories().find(c => c.id === id) || { name: id, color: '#64748B', bg: '#F1F5F9', icon: 'dompet' };
  },

  // ── Compute stats ───────────────────────────────────────────
  getMonthStats() {
    const txns = this.getTransactions();
    const now = new Date();
    const thisMonth = txns.filter(t => {
      const d = new Date(t.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });
    const income  = this.getTotalBudget();
    const expense = thisMonth.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return { income, expense, net: income - expense };
  }
};

/* ============================================================
   GreenTrackz - Shared UI Utilities
   ============================================================ */

/**
 * showToast(message, type)
 * type: 'success' | 'error' | 'info'  (default: 'success')
 */
GT.showToast = function(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = {
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>`,
  };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = (icons[type] || icons.info) + `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 280);
  }, 2800);
};

/**
 * initMobileNav(activePageHref)
 * Injects hamburger button and slide-in drawer into existing header.
 */
GT.initMobileNav = function(activePage) {
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  // Hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Buka menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  headerInner.appendChild(hamburger);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  document.body.appendChild(overlay);

  // Drawer
  const links = [
    { href: 'index.html',        label: 'Beranda' },
    { href: 'dashboard.html',    label: 'Dashboard' },
    { href: 'category.html',     label: 'Kategori' },
    { href: 'budgeting.html',    label: 'Budget' },
    { href: 'transactions.html', label: 'Transaksi' },
  ];
  const drawer = document.createElement('nav');
  drawer.className = 'mobile-nav';
  drawer.setAttribute('aria-label', 'Navigasi mobile');
  drawer.innerHTML = `
    <div class="mobile-nav-logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 5.8 17 4.5 17 4.5s-1.5 3-1 5a7 7 0 0 0 2.9-1.5s-.5 2.5-2 4c.3 3.5-2.5 6.5-5.9 9z"/>
      </svg>
      GreenTrackz
    </div>
    ${links.map(l => `<a href="${l.href}" class="mobile-nav-link${l.href === activePage ? ' active' : ''}">${l.label}</a>`).join('')}
  `;
  document.body.appendChild(drawer);

  const open  = () => { hamburger.classList.add('open'); overlay.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { hamburger.classList.remove('open'); overlay.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', () => hamburger.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
};

/**
 * setFieldError(fieldId, message)
 * Shows an inline error below an input. Pass empty string to clear.
 */
GT.setFieldError = function(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const errId = fieldId + '-err';
  let errEl = document.getElementById(errId);
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.id = errId;
    errEl.className = 'form-error';
    field.parentNode.appendChild(errEl);
  }
  if (message) {
    errEl.textContent = message;
    errEl.classList.add('visible');
    field.classList.add('invalid');
  } else {
    errEl.classList.remove('visible');
    field.classList.remove('invalid');
  }
};

GT.clearFieldErrors = function(...fieldIds) {
  fieldIds.forEach(id => GT.setFieldError(id, ''));
};

/**
 * exportCSV() — export all transactions to a CSV file
 */
GT.exportCSV = function() {
  const txns = GT.getTransactions();
  if (txns.length === 0) { GT.showToast('Belum ada transaksi untuk diekspor.', 'info'); return; }
  const header = ['Tanggal', 'Nama', 'Jumlah', 'Tipe', 'Kategori', 'Catatan'];
  const rows = txns.map(t => {
    const cat = GT.getCategoryById(t.category);
    return [
      t.date,
      `"${t.name.replace(/"/g, '""')}"`,
      t.amount,
      t.type === 'income' ? 'Pemasukan' : 'Pengeluaran',
      cat.name,
      `"${(t.note || '').replace(/"/g, '""')}"`,
    ].join(',');
  });
  const csv = [header.join(','), ...rows].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `GreenTrackz_Transaksi_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  GT.showToast(`${txns.length} transaksi berhasil diekspor!`, 'success');
};
