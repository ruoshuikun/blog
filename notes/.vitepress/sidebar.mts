import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
/*
* 由于 __dirname 在 ESM 模块中不可用，我们需要使用 import.meta.url 来获取当前模块的目录路径。
* */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface SidebarItem {
    text: string;
    link?: string;
    items?: SidebarItem[];
}

function getSidebar(dir: string, base: string = ''): SidebarItem[] {
  const files = fs.readdirSync(path.resolve(__dirname, '..', dir));

  return files.map(file => {
    console.log('file', file)
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(path.resolve(__dirname, '..', fullPath));

    if (stat.isDirectory()) {
      return {
        text: file,
        items: getSidebar(fullPath, path.join(base, file + '/'))
      };
    } else if (file.endsWith('.md')) {
      const name = file.replace(/\.md$/, '');
      return { text: name, link: path.join(base, name) };
    }
  }).filter(item => item !== undefined) as SidebarItem[];
}

export const sidebar = {
  // '/git/': getSidebar('git'),
  '/kuang-study/': getSidebar('kuang-study')
};
