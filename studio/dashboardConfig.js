export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60714525add5e0ba11b6d2ef',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9vtxkyct',
                  apiId: '5db7fdba-e7e9-4491-a3e7-5d6f5ddffb00'
                },
                {
                  buildHookId: '60714525add5e0b6a0b6d4b1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-xcf1zy5c',
                  apiId: '3c004770-2e4c-427e-8cd3-430a210e2c09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LarrySwanson/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-xcf1zy5c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
