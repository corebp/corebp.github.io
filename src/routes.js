let accounts = [
    { label: 'Accounts Receivable', route: '/docs/accredo/accounts/accounts-receivable', source: require('./pages/accredo_accounts_receivable.md') },
    { label: 'Accounts Payable', route: '/docs/accredo/accounts/accounts-payable', source: require('./pages/accredo_accounts_payable.md') },
    { label: 'Cash Book', route: '/docs/accredo/accounts/cashbook', source: require('./pages/accredo_cash_book.md') },
    { label: 'General Ledger', route: '/docs/accredo/accounts/ledger', source: require('./pages/accredo_general_ledger.md') },
    { label: 'Goods And Services Tax', route: '/docs/accredo/accounts/gst', source: require('./pages/accredo_gst.md') },
  ]
  
  let accredo = [
    { label: 'Accounting', route: '/docs/accredo/accounts', children: accounts },
    { label: 'Inventory Control', route: '/docs/accredo/products', source: require('./pages/accredo_prods.md') },
    { label: 'Invoicing System', route: '/docs/accredo/sales', source: require('./pages/accredo_sales.md') },
    { label: 'Purchase Orders', route: '/docs/accredo/purchasing', source: require('./pages/accredo_purchase_orders.md') },
    { label: 'Job Costing', route: '/docs/accredo/jobs', source: require('./pages/accredo_jobs.md') },
    { label: 'Company', route: '/docs/accredo/company', source: require('./pages/accredo_company.md') },
  ]
  
  let corefire = [
    { label: 'Jobs', route: '/docs/corefire/jobs', source: require('./pages/corefire_jobs.md') },
    { label: 'Solutions', route: '/docs/corefire/solutions', source: require('./pages/corefire_prods.md') },
    { label: 'Extras', route: '/docs/corefire/extras', source: require('./pages/corefire_extras.md') },
  ]
  
  let routes = [
    {
      label: 'Documentation', route: '/docs', children: [
        { label: 'Accredo', route: '/docs/accredo', children: accredo },
        { label: 'CoreFire', route: '/docs/corefire', children: corefire }
      ]
    }
  ]

  export default routes