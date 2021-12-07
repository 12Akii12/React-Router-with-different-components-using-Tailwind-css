import React from 'react';
import Logo from '../../assets/Icons/Logo.png';
import Nutrition from '../../assets/Icons/Nutrition.png';
import User from '../../assets/Icons/User.png';
import Workout from '../../assets/Icons/Workout.png';
import Group from '../../assets/Icons/Group.png';
import Iconschevron from '../../assets/Icons/Iconschevron.png';
import UserAvatar from '../../assets/Icons/usersAvatar.png';
import MaskGroup29 from '../../assets/Icons/MaskGroup29.png';
import MaskGroup30 from '../../assets/Icons/MaskGroup30.png';
import logoInverse from '../../assets/Icons/logoInverse.svg';

const Home = () => {
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
                    class="w-20 bg-white text-white h-screen px-7" >
                    <ul class="mt-2">
                        <li>
                            <img src={Workout} alt="" class="py-4" />
                            <img src={Nutrition} alt="" class="py-4" />
                            <img src={User} alt="" class="py-4" />

                        </li>
                    </ul>
                </nav>
                <div class='overflow-x-auto md:w-full min-h-screen py-10 px-7 flex'>
                    <div class='bg-white md:max-w-8xl md:w-full'>
                        <div class='flex justify-between py-5 md:ml-10 mx-full whitespace-nowrap'>
                            <div class="flex rounded">
                                <div class="flex border-2 rounded">
                                    <button class="flex items-center justify-center px-4">
                                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                    <input type="text" class="px-4 py-1 w-40 md:w-80" placeholder="Search Begineer Plan" />
                                </div>
                                <span>
                                    <button class="text-white text-xs font-montserrat-semibold inline-flex items-center justify-center md:flex bg-gray-900 rounded-lg px-2 py-2 ml-5 w-40">All Exercises
                                        <img src={Iconschevron} alt="" class="md:ml-2" />
                                    </button>
                                </span>
                            </div>
                            <button class="text-white text-xs font-montserrat-semibold bg-gray-900 mr-5 rounded-full w-40 hover:bg-persian-red-500 shadow-md" > + Add Exercise</button>
                        </div>
                        <table class='md:max-w-8xl md:w-full bg-white '>
                            <thead class="bg-gray-900 mx-full">
                                <tr class="text-white text-left">
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4">Exercise Name </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4"> Body Part </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4 text-center"> Muscles Involved </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4 text-center"> Equipment </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4 text-center"> Level </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4 text-center"> Created By </th>
                                    <th class="font-montserrat-semibold text-xs uppercase px-6 py-4"> Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="text-center md:text-align centerfont-montserrat-medium text-xs text-boulder-500 pt-2">test1 the flow</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> Arms</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <span class="bg-wild-sand-500 px-2 py-1">Biceps</span>&nbsp;<span class="bg-wild-sand-500 px-2 py-1">Triceps</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"><span class="bg-wild-sand-500 px-2 py-1">BodyWeight</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2" > Beginner </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <img src={Group} alt="" class="py-2 px-8" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500">test1</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Arms</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <span class="bg-wild-sand-500 px-2 py-1">Biceps</span>&nbsp;<span class="bg-wild-sand-500 px-2 py-1">Triceps</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"><span class="bg-wild-sand-500 px-2 py-1">BodyWeight</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Beginner </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 "> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> <img src={Group} alt="" class="py-4 px-8" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500">test1</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Arms</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <span class="bg-wild-sand-500 px-2 py-1">Biceps</span>&nbsp;<span class="bg-wild-sand-500 px-2 py-1">Triceps</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"><span class="bg-wild-sand-500 px-2 py-1">BodyWeight</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Beginner </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 "> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> <img src={Group} alt="" class="py-4 px-8" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500">test1</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Arms</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <span class="bg-wild-sand-500 px-2 py-1">Biceps</span>&nbsp;<span class="bg-wild-sand-500 px-2 py-1">Triceps</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"><span class="bg-wild-sand-500 px-2 py-1">BodyWeight</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Beginner </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 "> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> <img src={Group} alt="" class="py-4 px-8" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500">test1</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Arms</td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"> <span class="bg-wild-sand-500 px-2 py-1">Biceps</span>&nbsp;<span class="bg-wild-sand-500 px-2 py-1">Triceps</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 pt-2"><span class="bg-wild-sand-500 px-2 py-1">BodyWeight</span></td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> Beginner </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500 "> Yatish Tiwari </td>
                                    <td class="text-center font-montserrat-medium text-xs text-boulder-500"> <img src={Group} alt="" class="py-4 px-8" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class='flex w-full max-w-8xl justify-center py-10'>
                            <span class="inline-flex items-center">
                                <span class="bg-wild-sand-500 px-3 py-3">
                                    <img src={MaskGroup29} alt="" class="" />
                                </span>
                                <label class="text-boulder-500 text-xs pl-2 pr-2">Page 1 of 19</label>
                                <span class="bg-wild-sand-500 px-3 py-3">
                                    <img src={MaskGroup30} alt="" class="" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
