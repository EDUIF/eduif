export const packageRouter = [
  'Icon',
  'Card',
  'Alert',
  'Input',
  'Button',
  'Collapse',
  'Breadcrumb',
].map(name => {
  return { name, path: name.toLocaleLowerCase(), component: () => import(`@views/package/${name}/index.vue`) };
});

/**
 * ================================================================================================================
 * ================================================================================================================
 * ================================================================================================================
 */
export default [
  { name: 'Home', path: '/', meta: { title: 'EDUIF' }, component: () => import('@views/views/Home/index.vue') },
  { name: 'Package', path: '/package', meta: { title: '组件 | EDUIF' }, component: () => import('@views/views/Package/index.vue'), children: packageRouter },
];
