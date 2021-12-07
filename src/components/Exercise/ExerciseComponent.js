import React from 'react';
import Logo from '../../assets/Icons/Logo.png';
import Nutrition from '../../assets/Icons/Nutrition.png';
import User from '../../assets/Icons/User.png';
import Workout from '../../assets/Icons/Workout.png';
import VideoIcon from '../../assets/Icons/videoIcon.png';
import AudioIcon from '../../assets/Icons/audioIcon.png';
import Iconschevron from '../../assets/Icons/Iconschevron.png';
import UserAvatar from '../../assets/Icons/usersAvatar.png';

const ExerciseComponent = () => {
    return (
        <div class="bg-wild-sand-500 antialiased min-h-screen flex flex-col">
            <div class="bg-white flex flex-row justify-between h-14">
                <div class="flex">
                    <span class="w-20">
                        <img src={Logo} alt="" />
                    </span>
                    <span class="pt-3 mx-10 md:pl-10">
                        <button class="text-rhino-light-500 text-sm font-roboto-medium inline-flex items-center md:flex md:ml-10 bg-wild-sand-500 px-2 py-1">
                            Library
                            <img src={Iconschevron} alt="" />
                        </button>
                    </span>
                </div>
                <span class="pt-2 mr-10 flex">
                    <img src={UserAvatar} alt="" class="object-contain h-10 pr-2" />
                    <button class="text-mirage-500 text-sm font-roboto-medium inline-flex md:flex items-center pb-2">
                        <span>Joe Smith</span>
                        <img src={Iconschevron} alt="" />
                    </button>
                </span>
            </div>
            <div class="relative flex flex-grow">
                <nav
                    class="w-20 bg-white text-white h-100% px-7" >
                    <ul class="mt-2">
                        <li>
                            <img src={Workout} alt="" class="py-4" />
                            <img src={Nutrition} alt="" class="py-4" />
                            <img src={User} alt="" class="py-4" />

                        </li>
                    </ul>
                </nav>
                <div class='overflow-x-auto w-980 py-10 px-10 flex-1 ml lg:ml-20'>
                    <div class="md:grid md:grid-cols-2 md:justify-center h-998 w-4/7 md:w-4/7 lg:w-4/5  rounded divide-x bg-white">
                        <div class=" bg-white pl-10 pr-10 pt-10 pb-5">
                            <div class="mb-4 pr-8">
                                <input class="bg-wild-sand-500 border-solid border border-alto-500 rounded w-full py-2 px-3 text-storm-dust-500 " id="username" type="text" placeholder="Name of the Exercise" />
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="about" class="block text-sm font-montserrat-medium text-storm-dust-500">
                                    Description (Optional)
                                </label>
                                <div class="mt-1">
                                    <textarea id="description" name="description" rows="3" class=" w-full border-solid border border-alto-500 rounded-md text-storm-dust-500"></textarea>
                                </div>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-2">
                                <label for="body part" class="block text-sm font-montserrat-medium text-storm-dust-500">Body Part</label>
                                <select id="body-part" name="body-part" autocomplete="body-part" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                    <option>Legs</option>
                                    <option>Arms</option>
                                    <option>Full Body</option>
                                </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="Muscles Involved" class="block text-sm font-montserrat-medium text-storm-dust-500">Muscles Involved</label>
                                <select id="muscles-involved" name="muscles-involved" autocomplete="muscles-involved" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                    <option>Legs</option>
                                    <option>Arms</option>
                                    <option>Full Body</option>
                                </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="Equipment" class="block text-sm font-montserrat-medium text-storm-dust-500">Equipment</label>
                                <select id="equipment" name="equipment" autocomplete="equipment" placeholder="Select Body Part" class="mt-1 block w-full py-3 px-3 border-solid border border-alto-500 rounded-md text-storm-dust-500 bg-white">
                                    <option>Legs</option>
                                    <option>Arms</option>
                                    <option>Full Body</option>
                                </select>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4 w-1/3">
                                <label for="time-per-rep" class="block text-sm font-montserrat-medium text-storm-dust-500">Time per rep</label>
                                <input class=" border-solid border border-alto-500 rounded w-full py-2 px-3 text-storm-dust-500 " id="username" type="number" placeholder="No" />
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="about" class="block text-sm font-montserrat-medium text-storm-dust-500">
                                    Instrctions (Optional)
                                </label>
                                <div class="mt-1">
                                    <textarea id="description" name="description" rows="2" class=" w-full border-solid border border-alto-500 rounded-md text-storm-dust-500"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="bg-link-water-500 pl-10 pr-10 pt-10 pb-5">
                            <div class="mb-4 pr-8">
                                <label for="about" class="block text-lg font-montserrat-medium text-storm-dust-500">
                                    Upload Media
                                </label>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="video" class="block text-sm font-montserrat-medium text-storm-dust-500">Video</label>
                                <input class=" border-solid border border-alto-500 rounded w-full py-2 px-3 text-storm-dust-500 mt-1 " id="video" type="text" placeholder="Copy paste link to Video here" />
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <div class="bg-white mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <span class="flex justify-center">
                                            <img src={VideoIcon} alt="" />
                                        </span>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-montserrat-medium text-storm-dust-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Click to Upload</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or Drag Videos here</p>
                                        </div>
                                        <p class="text-xs text-gray-500">
                                            (Max file size: 300MB)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <label for="audio" class="block text-sm font-montserrat-medium text-storm-dust-500">Audio</label>
                                <input class=" border-solid border border-alto-500 rounded w-full py-2 px-3 text-storm-dust-500 mt-1 " id="video" type="text" placeholder="Copy paste link to Audio here" />
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4">
                                <div class="bg-white mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <span class="flex justify-center">
                                            <img src={AudioIcon} alt="" />
                                        </span>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-montserrat-medium text-storm-dust-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Click to Upload</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1">or Drag Audio file here</p>
                                        </div>
                                        <p class="text-xs text-storm-dust-500">
                                            (Max file size: 300MB)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-6 sm:col-span-3 mt-4 w-full mb-12">
                                <label for="toggleB" class="flex items-center cursor-pointer">
                                    <div class=" text-storm-dust-500 font-montserrat-medium">
                                        Status
                                    </div>
                                    <div class="relative ml-6">
                                        <input type="checkbox" id="toggleB" class="sr-only" />
                                        <div class="block bg-gray-600 w-10 h-6 rounded-full"></div>
                                        <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end bg-white w-4/7 md:4/7 lg:w-4/5 pt-4 pb-4">
                        <button class="text-rhino-500 text-xs font-montserrat-semibold  mr-5 border-solid border border-martinique-500 rounded-full px-4 py-2 w-50 md:w-40" >Cancel</button>
                        <button class="text-white text-xs font-montserrat-semibold bg-gray-900 mr-5 rounded-full px-4 py-2 w-50 md:w-40" >Save Exercise</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ExerciseComponent
