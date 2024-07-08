export function joinPaths(base, path) {
    return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
  }