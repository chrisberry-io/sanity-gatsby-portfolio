export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e5a47baee027cead5b6bd79',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2wqqsiir',
                  apiId: 'ad9c382d-97ba-4eaf-9e63-3663deaaef06'
                },
                {
                  buildHookId: '5e5a47bb0f8528260445462b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7g82e21n',
                  apiId: '8dc1ed4b-f041-4452-ac9e-84c098868d08'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisberry08/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7g82e21n.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
