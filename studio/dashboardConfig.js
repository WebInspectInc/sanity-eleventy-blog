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
                  buildHookId: '5dace27e389e5c50c4aa3a4d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-is8mt1wj',
                  apiId: '3241dcbe-002c-4dd1-81ab-ffc7a53ff129'
                },
                {
                  buildHookId: '5dace27f28bed4e5934e5d37',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4w1rqe3n',
                  apiId: '79588306-854e-4ebc-b7ac-63df23bdecb0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WebInspectInc/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4w1rqe3n.netlify.com', category: 'apps'}
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
