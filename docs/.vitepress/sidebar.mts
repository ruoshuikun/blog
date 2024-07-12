import fs from 'fs';
import path from 'path';


interface SidebarItem {
    text: string;
    link?: string;
    items?: SidebarItem[];
}

function getSidebar(dir: string, base: string = ''): SidebarItem[] {
    const files = fs.readdirSync(path.resolve(__dirname, '..', dir));

    return files.map(file => {
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
    '/git/': getSidebar('git'),
    // '/kuang-study/': getSidebar('kuang-study')
};
