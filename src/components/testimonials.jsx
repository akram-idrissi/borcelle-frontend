const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Obsessed with this lip combo! The lip liner in Obsession, the lipstick in Heartfelt, and the CheekOil & Lip from @muacosmetics.ma made the perfect trio!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Ghazi Sofia',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'testimonials/gs.jpg'
    },
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Galentine’s look was absolutely stunning! 😍 Thanks to the amazing products from @muacosmetics.ma',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Sofia Berbich',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'testimonials/sb.jpg'
    },
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description: 'Did a full face using only @muacosmetics.ma products, and I’m beyond impressed with the results! ❤️',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'هبة💋',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl: 'testimonials/by.jpg'
    },
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white pb-32 sm:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full lg:mx-0">
          <h2 className="font-abhaya sm:text-center text-5xl font-bold tracking-tight text-[#1a1a1a] sm:text-7xl">Témoignages des clients</h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
