import { configure, setAddon } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/stories', true, /.js/));
}

const portalRoot = document.createElement('div');
portalRoot.setAttribute('id', 'portal-root');
document.body.append(portalRoot);

configure(loadStories, module);