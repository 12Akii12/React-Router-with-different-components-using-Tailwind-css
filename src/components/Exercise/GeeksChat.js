import React from 'react';
import logoInverse from '../../assets/Icons/logoInverse.svg';
import Home from '../../assets/Icons/home.svg';
import chevrondown from '../../assets/Icons/chevrondown.svg';
import creditcard from '../../assets/Icons/creditcard.svg';
import user from '../../assets/Icons/user.svg';
import bookopen from '../../assets/Icons/bookopen.svg';
import file from '../../assets/Icons/file.svg';
import lock from '../../assets/Icons/lock.svg';
import message from '../../assets/Icons/message.svg';
import columns from '../../assets/Icons/columns.svg';
import database from '../../assets/Icons/database.svg';
import helpcircle from '../../assets/Icons/helpcircle.svg';
import settings from '../../assets/Icons/settings.svg';
import cornerleftdown from '../../assets/Icons/cornerleftdown.svg';
import folder from '../../assets/Icons/folder.svg';
import gitpllrequest from '../../assets/Icons/gitpllrequest.svg';
import giftbox from '../../assets/Icons/giftbox.png';
import menu from '../../assets/Icons/menu.svg';
import avatar1 from '../../assets/Icons/avatar1.jpeg';
import bell from '../../assets/Icons/bell.svg';
import morehorizontal from '../../assets/Icons/morehorizontal.svg';
import edit from '../../assets/Icons/edit.svg';
import avatar4 from '../../assets/Icons/avatar4.jpeg';
import userplus from '../../assets/Icons/userplus.svg';
import video from '../../assets/Icons/video.svg';
import phonecall from '../../assets/Icons/phonecall.svg';
import avatar2 from '../../assets/Icons/avatar2.jpeg';
import avatar3 from '../../assets/Icons/avatar3.jpeg';
import morevertical from '../../assets/Icons/morevertical.svg';
import navigation from '../../assets/Icons/navigation.svg';
import mic from '../../assets/Icons/mic.svg';
import paperclip from '../../assets/Icons/paperclip.svg';
import smile from '../../assets/Icons/smile.svg';


const GeeksChat = () => {
    return (
        <div class="min-h-auto antialiased flex flex-row bg-gray-100">
            <div class="flex flex-col w-0 md:w-1/5 bg-haiti-500 overflow-hidden">
                <div class="h-screen overflow-y-auto">
                    <div class="flex mt-5 ml-7 ">
                        <span class=" h-1/3">
                            <img src={logoInverse} alt="" />
                        </span>
                    </div>
                    <ul class="flex flex-col py-4 ml-4">
                        <li>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={Home} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Dashboard</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={creditcard} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Courses</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={user} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">User</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={bookopen} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">CMS</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={file} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Project</span>
                                <span class="ml-auto mr-6 text-sm bg-newTagColor-500 rounded-lg px-2 py-px text-white">New</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={lock} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Authentication</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <br class="divide-y-4 divide-white divide-opacity-25 shadow-white-md" />
                        </li>
                        <li>
                            <span class="text-navHeadingColor-500 ml-4">APPS</span>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={message} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Chat</span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={columns} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Task</span>
                            </a>
                        </li>
                        <li>
                            <br class="divide-y-4 divide-white divide-opacity-25 shadow-white-md" />
                        </li>
                        <li>
                            <span class="text-navHeadingColor-500 ml-4">COMPONENTS</span>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={database} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Tables</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={helpcircle} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Help Center</span>
                                <span class="ml-2 mr-6 text-sm bg-helpCenterColor-500 rounded-lg px-2 py-px text-white">Pro</span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={settings} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Site Setting</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={cornerleftdown} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Site Setting</span>
                                <span class="ml-auto mr-6"><img src={chevrondown} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <br class="divide-y-4 divide-white divide-opacity-25 shadow-white-md" />
                        </li>
                        <li>
                            <span class="text-navHeadingColor-500 ml-4">DOCUMENTATIONS</span>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={folder} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Documentation</span>
                            </a>
                            <a href="#" class="flex flex-row items-center h-10 transform  transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src={gitpllrequest} alt="" /></span>
                                <span class="text-sm font-medium text-navColor-500 inline-block hover:text-white">Changelog</span>
                                <span class="ml-2 mr-6 text-sm bg-newTagColor-500 rounded-lg px-2 py-px text-white">2.2.2</span>
                            </a>
                        </li>
                    </ul>
                    <div class="card bg-purple-heart-500 rounded-lg shadow-none text-center mx-4 my-8">
                        <div class="card-body py-6">
                            <img src={giftbox} alt="" class="mx-auto" />
                            <div class="mt-4">
                                <h5 class="text-white"> Unlimited Access</h5>
                                <p class="text-smoky-300 mt-4">Upgrade your plan from a Free trial, to select ‘Business Plan’. Start Now</p>
                                <button class="bg-white text-black py-2 px-2 rounded-md mt-4 subpixel-antialiased">Upgrade Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-screen flex flex-col overflow-hidden">
                <div class="bg-white h-16 flex flex-row justify-between">
                    <div class="flex">
                        <span class="py-6 px-4">
                            <img src={menu} alt="" class="" />
                        </span>
                        <div class='flex justify-between py-3 whitespace-nowrap'>
                            <div class="flex rounded">
                                <div class="flex border rounded">
                                    <button class="flex items-center justify-center px-2">
                                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                    <input type="text" class="py-2 w-40 md:w-48 border border-solid" placeholder="Search Entire Dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-between">
                        <span class=" mt-2 mr-2 rounded-full flex items-center justify-center w-12 h-12 bg-wild-sand-500 ">
                            <img src={bell} alt="" class="rounded-full w-4 bg-wild-sand-500" />
                        </span>
                        <span class="py-2 pr-6">
                            <img src={avatar1} alt="" class="rounded-full w-12" />
                        </span>
                    </div>
                </div>
                <div class="w-full h-full border border-solid flex flex-row ">
                    <div class="w-full md:w-1/3 h-screen bg-white  border-r border-solid">
                        <div class="bg-white">
                            <div class="px-6 py-4 pt-3">
                                <div class="flex justify-between justify-items-center">
                                    <div class="">
                                        <h1 class="text-2xl subpixel-antialiased">Chat</h1>
                                    </div>
                                    <div class="flex">
                                        <span class=" mr-2 rounded-full flex items-center justify-center w-10 h-10 bg-purple-heart-500 ">
                                            <img src={edit} alt="" class="rounded-full w-4 bg-purple-heart-500" />
                                        </span>
                                        <span class=" mr-2 rounded-full flex items-center justify-center w-10 h-10 bg-wild-sand-500 ">
                                            <img src={settings} alt="" class="rounded-full w-4 bg-wild-sand-500" />
                                        </span>
                                    </div>
                                </div>
                                <div class="my-4 mr-2">
                                    <input type="search" class="w-full px-4 py-2 border-solid border border-alto-500 rounded" placeholder="Search people, group and messages" />
                                </div>
                                <div class="flex justify-between justify-items-center">
                                    <span class="py-2 pr-6">
                                        <div class="flex">
                                            <div class="">
                                                <img src={avatar1} alt="" class="rounded-full w-10" />
                                            </div>
                                            <div class="mx-2">
                                                <h5 class="text-sm">Jitu Chauhan</h5>
                                                <p class="text-wild-sand-700 text-sm">Online</p>
                                            </div>
                                        </div>
                                    </span>
                                    <span class=" rounded-full flex items-center justify-center w-10 h-10 ">
                                        <img src={morehorizontal} alt="" class="rounded-full" />
                                    </span>
                                </div>
                            </div>
                            <ul class="flex flex-row justify-start border-b border-grey-500 ">
                                <li class="mx-3">
                                    <a class="text-purple-heart-500 py-2" id="recent-tab" data-bs-toggle="pill" href="#recent" role="tab" aria-controls="recent" aria-selected="true">Recent</a>
                                </li>
                                <li class="mx-4">
                                    <a class="text-wild-sand-800" id="contact-tab" data-bs-toggle="pill" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="overflow-y-auto h-4/6">
                            <div class="overflow-y-auto ">
                                <ul class="flex flex-col justify-start border-b border-grey-500">
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100 bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar4} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Sharad Mishra</h5>
                                                        <p class="text-wild-sand-700 text-sm">Currently chat with user component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar3} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Tanya Davies</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                    <li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li><li class="hover:bg-gray-100">
                                        <div class="flex justify-between justify-items-center">
                                            <span class="py-4 pl-5">
                                                <div class="flex">
                                                    <div class="">
                                                        <img src={avatar2} alt="" class="rounded-full w-12" />
                                                    </div>
                                                    <div class="mx-2 truncate">
                                                        <h5 class="text-sm">Olivia Cooper</h5>
                                                        <p class="text-wild-sand-700 text-sm">I m for unread message component...</p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bg-grey-100 h-screen border-b border-solid flex flex-col justify-between w-0 md:w-full overflow-hidden relative">
                        <div class="flex justify-between bg-white overflow-hidden">
                            <div class="flex justify-between justify-items-center">
                                <span class="py-2 px-6">
                                    <div class="flex">
                                        <div class="">
                                            <img src={avatar4} alt="" class="rounded-full w-11" />
                                        </div>
                                        <div class="mx-2">
                                            <h5 class="text-xs md:text-md">Sharad Mishra</h5>
                                            <p class="text-wild-sand-700 text-xs md:text-sm">Online</p>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div class=" flex justify-between my-3">
                                <span class="py-2 pr-6">
                                    <img src={phonecall} alt="" class="rounded-full w-5" />
                                </span>
                                <span class="py-2 pr-6">
                                    <img src={video} alt="" class="rounded-full w-5" />
                                </span>
                                <span class="py-2 pr-6">
                                    <img src={userplus} alt="" class="rounded-full w-5" />
                                </span>
                            </div>
                        </div>
                        <div class="px-4 py-4 h-screen mx-2.5 overflow-hidden">
                            <div class="h-3/5 overflow-y-auto">
                                <div class="flex w-lg-40 mb-4">
                                    <img src={avatar4} alt="" class="rounded-full w-11 h-11" />
                                    <div class="mx-4">
                                        <small class="text-smoky-500 subpixel-antialiased">sharad mishra , 09:35</small>
                                        <div class="flex">
                                            <div class="w-full md:w-1/3  mt-2 rounded-lg flex bg-white border border-solid px-2 py-2 text-smoky-600">
                                                <div class="p-3">
                                                    <p class="mb-0 text-dark md:text-xs lg:text-sm subpixel-antialiased">
                                                        I just start Bootstrap, SCSS and Gulp development
                                                        &amp; setup github repository. simple example content
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <span class="py-2 pr-6">
                                                    <img src={morevertical} alt="" class="rounded-full w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-end mb-4">
                                    <div class="flex w-lg-40">
                                        <div class="text-right">
                                            <small class="">09:39</small>
                                            <div class="flex justify-end">
                                                <div class="mt-2">
                                                    <span class="py-2 pr-6">
                                                        <img src={morevertical} alt="" class="rounded-full w-4" />
                                                    </span>
                                                </div>
                                                <div class="mt-2 rounded-lg text-white bg-purple-heart-500 md:w-1/3 p-2  ">
                                                    <div class="text-left p-3">
                                                        <p class="mb-0 md:text-xs lg:text-sm subpixel-antialiased">
                                                            I just start Bootstrap, SCSS and Gulp
                                                            development &amp; setup github repository.
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src={avatar4} alt="" class="rounded-full w-11 h-11 mx-2" />
                                    </div>
                                </div>
                                <div class="flex w-lg-40 mb-4">
                                    <img src={avatar4} alt="" class="rounded-full w-11 h-11" />
                                    <div class="mx-4">
                                        <small class="text-smoky-500 subpixel-antialiased">sharad mishra , 09:42</small>
                                        <div class="flex">
                                            <div class="w-1/2 min-w-full mt-2 rounded-lg flex bg-white border border-solid px-2 py-2 text-smoky-600">
                                                <div class="p-3">
                                                    <p class="mb-0 text-dark text-sm subpixel-antialiased md:text-xs lg:text-sm">
                                                        Thank you
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <span class="py-2 pr-6">
                                                    <img src={morevertical} alt="" class="rounded-full w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-end mb-4">
                                    <div class="flex w-lg-40">
                                        <div class="text-right">
                                            <small class="">09:48</small>
                                            <div class="flex justify-end">
                                                <div class="mt-2">
                                                    <span class="py-2 pr-6">
                                                        <img src={morevertical} alt="" class="rounded-full w-4" />
                                                    </span>
                                                </div>
                                                <div class="mt-2 rounded-lg text-white bg-purple-heart-500 w-1/2 min-w-full p-2  ">
                                                    <div class="text-left p-3">
                                                        <p class="mb-0 md:text-xs lg:text-sm subpixel-antialiased">
                                                            You are most welcome.
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <img src={avatar4} alt="" class="rounded-full w-11 h-11 mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-1 ">
                                <div class="bg-white  rounded-lg shadow-sm flex justify-between">
                                    <input class="form-control border-0 form-control-simple no-resize px-2 py-5 w-full" placeholder="Type a New Message" />
                                    <div class="p-5">
                                        <img src={navigation} alt="" class="w-6" />
                                    </div>
                                </div>
                                <div class="flex mt-4">
                                    <div class=" flex">
                                        <img src={smile} alt="" class="w-5 mr-2" />
                                        <img src={paperclip} alt="" class="w-5 mx-2" />
                                        <img src={mic} alt="" class="w-5 mx-2" />
                                        <img src={morehorizontal} alt="" class="w-5 mx-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default GeeksChat
