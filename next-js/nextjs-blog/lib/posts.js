import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POST_DIRECTORY = path.join(process.cwd(), 'posts');

export function getStoredPostsData() {
  const fileNames = fs.readdirSync(POST_DIRECTORY);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(POST_DIRECTORY, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContent);
    return { id, ...matterResult.data };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
