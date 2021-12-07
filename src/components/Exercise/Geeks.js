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
import chevronright from '../../assets/Icons/chevronright.svg';
import image from '../../assets/Icons/image.svg';

const Geeks = () => {
    return (
        <div class="min-h-screen antialiased flex flex-row bg-gray-100">
            <div class="flex flex-col w-1/5 bg-haiti-500 overflow-hidden">
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
            <div class="w-screen flex flex-col">
                <div class="bg-white h-16  shadow-md flex flex-row justify-between">
                    <div class="flex">
                        <span class="py-6 px-6">
                            <img src={menu} alt="" class="" />
                        </span>
                        <div class='flex justify-between py-3 whitespace-nowrap'>
                            <div class="flex rounded">
                                <div class="flex border rounded">
                                    <button class="flex items-center justify-center px-4">
                                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 28 28">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                    <input type="text" class="px-4 py-2 w-40 md:w-48" placeholder="Search Entire Dashboard" />
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
                <div class="md:flex md:flex-row justify-between">
                    <span class="py-6 px-6 ">
                        <h1 class="text-xl md:text-2xl subpixel-antialiased ml-6 md:ml-0">Create New Project</h1>
                        <nav class="mt-1 ml-6 md:ml-0">
                            <ol class="flex">
                                <li class="flex">
                                    <label class="text-newTagColor-500 text-sm">Dashboard</label>
                                    <span class="px-2 py-0.5">
                                        <img src={chevronright} alt="" class="w-4" />
                                    </span>
                                </li>
                                <li class="flex">
                                    <label class="text-newTagColor-500 text-sm">Project </label>
                                    <span class="px-2 py-0.5">
                                        <img src={chevronright} alt="" class="w-4" />
                                    </span>

                                </li>
                                <li class="flex">
                                    <label class="text-sm">Create Project</label>
                                </li>
                            </ol>
                        </nav>
                    </span>
                    <span class="py-6 md:pl-6 mr-4">
                        <button class="bg-newTagColor-500 py-4 px-4 rounded-lg text-white subpixel-antialiased mt-2 md:mt-0">Back to Project</button>
                    </span>
                </div>
                <div class="md:flex md:flex-col  bg-white mx-6 md:mx-auto md:w-1/2 h-auto pb-14 border-solid border border-alto-500 rounded my-10">
                    <div class=" sm:col-span-3 mt-10 mx-12">
                        <label for="video" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Name *</label>
                        <input class=" border-solid border border-alto-500 rounded w-full py-3 px-5 text-storm-dust-500 mt-2 " id="video" type="text" placeholder="Enter project title" />
                    </div>
                    <div class="col-span-6 sm:col-span-3 mt-6 mx-12">
                        <label for="about" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">
                            Description
                        </label>
                        <div class="mt-2">
                            <textarea id="description" name="description" rows="3" class=" w-full border-solid border border-alto-500 rounded-md text-storm-dust-500 py-3 px-5" placeholder="Enter brief about Project..."></textarea>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between  mt-6 mx-12">
                        <div class="md:w-full mr-4">
                            <label for="video" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Start Date *</label>
                            <input class=" border-solid border border-alto-500 rounded w-40 md:w-full  py-3 px-5 text-storm-dust-500 mt-2 " id="video" type="date" placeholder="Select Date" />
                        </div>
                        <div class="md:w-full ml-4">
                            <label for="video" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">End Date *</label>
                            <input class=" border-solid border border-alto-500 rounded w-40 md:w-full py-3 px-5 text-storm-dust-500 mt-2 " id="video" type="date" placeholder="Select Date" />
                        </div>
                    </div>
                    <div class="flex flex-row justify-between  mt-6 mx-12">
                        <div class="col-span-6 sm:col-span-3 mt-2 w-full mr-4">
                            <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Privacy</label>
                            <select id="body-part" name="body-part" autocomplete="body-part" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                <option>Select Privacy</option>
                                <option>Public to you team</option>
                                <option>Private to project members</option>
                                <option>Private to you</option>
                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3 mt-2 w-full ml-4">
                            <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Team Members</label>
                            <select id="body-part" name="body-part" autocomplete="body-part" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                <option>Assign to Owner</option>
                                <option>Elenor Pena</option>
                                <option>David warner Body</option>
                                <option>Assign to Owner</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between  mt-6 mx-12">
                        <div class="col-span-6 sm:col-span-3 mt-2 w-full mr-4">
                            <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Budget</label>
                            <select id="body-part" name="body-part" autocomplete="body-part" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                <option>Project Budget</option>
                                <option>Based on the Team</option>
                                <option>Private to project members</option>
                                <option>Private to you</option>
                            </select>
                        </div>
                        <div class="col-span-6 sm:col-span-3 mt-2 w-full ml-4">
                            <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Priority</label>
                            <select id="body-part" name="body-part" autocomplete="body-part" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                <option>Set Priority</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>
                    <div class=" mt-6 mx-12">
                        <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Project Logo</label>
                        <div class=" border-solid border border-alto-500 rounded  mt-4 w-20">
                            <input type="file" multiple class="cursor-pointer block opacity-0 " />
                            <div class="text-center m-auto">
                                <img src={image} alt="" class=" px-7 pb-6" />
                            </div>
                        </div>
                    </div>
                    <div class=" mt-6 mx-12">
                        <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500 subpixel-antialiased">Cover Image</label>
                        <div class=" border-dashed border-2 border-alto-500 rounded relative mt-4">
                            <input type="file" multiple class="cursor-pointer relative block opacity-0  h-10 p-16" />
                            <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                                <h4 class="text-center py-3">
                                    Drop files here to upload
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6 sm:col-span-3 mt-6 mx-8">
                        <span class="py-4 pl-4">
                            <button class="bg-newTagColor-500 py-4 px-4 rounded-lg text-white subpixel-antialiased mt-2 md:mt-0">Submit</button>
                        </span>
                        <span class="py-4 pl-4">
                            <button class="bg-white py-4 px-4 rounded-lg text-newTagColor-500 subpixel-antialiased mt-2 md:mt-0 border-solid border border-newTagColor-500">Close</button>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Geeks
