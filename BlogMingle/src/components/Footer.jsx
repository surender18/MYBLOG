import React from 'react'
import { Footer, FooterIcon } from 'flowbite-react'
import {Link} from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsYoutube} from 'react-icons/bs';
export default function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex grid-cols-1'> 
            <div className='mt-5'>
            <Link to='/' className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-700 via-purple-800 to-pink-800 rounded-lg text-white">Surender's </span>
            Blog
        </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About'/>
            <Footer.LinkGroup col>
            <Footer.Link href='https://surender18.github.io/Imagesearch_app18/' target='_blank' rel='noopener noreferrer'>
            Image Search App
            </Footer.Link>

            <Footer.Link href='/about'>
           Surender's Blog
            </Footer.Link>
            </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Follow us'/>
            <Footer.LinkGroup col>
            <Footer.Link href='https://github.com/surender18' target='_blank' rel='noopener noreferrer'>
            Github
            </Footer.Link>

            <Footer.Link href='https://discord.com/invite/5zMPntwe 'target='_blank' rel='noopener noreferrer'>
           Discord
            </Footer.Link>
            </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='LEGAL'/>
            <Footer.LinkGroup col>
            <Footer.Link href='#'>
            Privacy Policy
            </Footer.Link>

            <Footer.Link href='#'>
           Terms & Conditions
            </Footer.Link>
            </Footer.LinkGroup>
                </div>
                </div>
            </div>

            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Surender's blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <FooterIcon href='#' icon={BsFacebook}/>
                    <FooterIcon href='#' icon={BsInstagram}/>
                    <FooterIcon href='#' icon={BsTwitter}/>
                    <FooterIcon href='#' icon={BsGithub}/>
                    <FooterIcon href='#' icon={BsYoutube}/>
                </div>
            </div>
        </div>
        </Footer>
  )
}
