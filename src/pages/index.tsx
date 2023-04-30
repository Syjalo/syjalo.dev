import { SiDiscord, SiGithub, SiMaildotru, SiTwitter, SiVk } from 'react-icons/si';


export default function Main() {
  return (
    <div className='w-screen h-screen bg-neutral-900 text-neutral-200'>
      <div className='w-full h-full mx-auto p-6 flex justify-center items-center'>
        <div>
          <h1 className='text-6xl font-bold'>Hello, I&apos;m Syjalo!</h1>
          <p className='uppercase text-lg tracking-wides text-neutral-300'>Don&apos;t imagine, just do it</p>
          <div className='flex items-center justify-between max-w-xs mx-auto my-4'>
            <a href='mailto:contact@syjalo.dev' target='_blank' title='Email'>
              <SiMaildotru className='h-8 w-8' />
            </a>
            <a href='https://github.com/Syjalo' target='_blank' title='GitHub'>
              <SiGithub className='h-8 w-8' />
            </a>
            <div className='group' title='Discord'>
              <span className='absolute w-auto p-2 min-w-max -translate-x-1/3 translate-y-10 rounded-md text-neutral-900 bg-neutral-300 text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-100'>Syjalo#6046</span>
              <SiDiscord className='h-8 w-8' />
            </div>
            <a href='https://vk.com/synbulat.biishev' target='_blank' title='VK'>
              <SiVk className='h-8 w-8' />
            </a>
            <a href='https://twitter.com/Syjalo_' target='_blank' title='Twitter'>
              <SiTwitter className='h-8 w-8' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
