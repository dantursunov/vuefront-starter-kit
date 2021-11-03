export default {
  app: [],
  // app: ['@vuefront/checkout-app'],
  image: {
    logo: {
      path: '~/assets/img/logo_header.svg'
    },
    footerLogo: {
      path: '~/assets/img/logo_footer.svg'
    },
  },
  layouts: {
    '*': {
      headerMenu: [
        [
          'Menu',
          {
            items: ['store', 'blog']
          }
        ]
      ],
      footerLeft: ['Pages'],
      footerCenter: ['AccountLinks'],
      footerRight: [
        [
          'ExtraLinks',
          {
            links: [
              {
                to: '/store/special',
                text: 'Special'
              },
              {
                to: '/store/compare',
                text: 'Compare'
              },
              {
                to: '/contact',
                text: 'Contact Us'
              }
            ]
          }
        ]
      ]
    },
    '/': {
      contentTop: [
        [
          'Slideshow',
          {
            sliderNav: true,
            sliderArrows: true,
            items: [
              'https://images.pexels.com/photos/3723869/pexels-photo-3723869.jpeg?cs=srgb&dl=pexels-molly-champion-3723869.jpg&fm=jpg',
              'https://images.pexels.com/photos/1988693/pexels-photo-1988693.jpeg?cs=srgb&dl=pexels-steve-johnson-1988693.jpg&fm=jpg',
              'https://images.pexels.com/photos/3123915/pexels-photo-3123915.jpeg?cs=srgb&dl=pexels-ylanite-koppens-3123915.jpg&fm=jpg',
              'https://images.pexels.com/photos/5784708/pexels-photo-5784708.jpeg?cs=srgb&dl=pexels-becerra-govea-photo-5784708.jpg&fm=jpg'
              
            ]
          }
        ],
        [
          'FeaturedProduct',
          {
            ids: JSON.parse(process.env.FEATURED_PRODUCT)
          }
        ],
        'LatestProduct',
        'SpecialProduct',
        'LatestPost'
      ]
    },
    '/search/*': {
      contentBottom: ['SearchProduct', 'SearchPost']
    },
    '/store/category*': {
      columnLeft: [
        'StoreCategory',
        [
          'LatestProduct',
          {
            column: true
          }
        ]
      ]
    },
    '/blog/category*': {
      columnRight: [
        'Search',
        'BlogCategory',
        [
          'LatestPost',
          {
            column: true
          }
        ]
      ]
    },
    '/store/product/*': {
      contentBottom: ['RelatedProduct']
    },
    '/blog/post*': {
      columnRight: [
        [
          'LatestPost',
          {
            column: true
          }
        ]
      ]
    },
    '/account*': {
      columnRight: ['Account']
    },
    '/store/checkout': {
      contentTop: ['Checkout']
    }
  }
}