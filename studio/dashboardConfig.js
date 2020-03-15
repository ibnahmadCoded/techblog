export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e6e4b7c63bfb844ef640d6e',
                  title: 'Sanity Studio',
                  name: 'techblog-studio',
                  apiId: 'b2dff8ff-a846-4706-bd80-d16b090335ca'
                },
                {
                  buildHookId: '5e6e4b7c75ff994be739f6c3',
                  title: 'Blog Website',
                  name: 'techblog-web',
                  apiId: '3b5a01b6-8e85-4f80-8092-ce7f0651d2f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ibnahmadCoded/techblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://techblog-web.netlify.com', category: 'apps'}
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
