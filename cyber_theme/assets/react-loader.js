let bundlePromise = null;

export async function loadReactComponent(name, targetId) {
  if (!bundlePromise) {
    bundlePromise = import('/themez/cyber-demo.js');
  }
  const { components } = await bundlePromise;
  const container = document.getElementById(targetId);
  if (container && components[name]) {
    components[name](container);
  } else {
    console.warn(`Component ${name} not found`);
  }
}
