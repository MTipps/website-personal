import { mapState } from 'vuex'

const skills = {
  ...mapState('techStack', [
    'techStackItems'
  ])
}

export const state = () => ({
  recentWorkHeading: {
    heading: 'Recent Work',
    subHeading: 'I am always busy creating and here are a few things that I have done:'
  },
  recentWorkItems: [
    {
      title: 'NG Kerk Paarlberg',
      image: '/recent-work/ng-paarlberg-kerk/paarlberg-logo.jpg',
      description: 'I created this for my local church that desperately needed a website makeover. I created it with Wordpress to have them efficiently manage the information on the site.',
      link: 'http://paarlbergkerk.co.za/',
      techUsed: [
        skills.wordpress
      ]
    },
    {
      title: 'Megan Tipps',
      image: '',
      description: 'I created my website with Nuxt.js, Tailwind CSS and Contentful. ',
      link: '',
      techUsed: [
        {
          icon: '',
          tooltipText: ''
        }
      ]
    }
  ]
})
