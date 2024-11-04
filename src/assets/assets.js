import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import logo from './logo.png'
import profile from './profile.png'
import dropdown from './dropdown.png'
import group_profile from './group_profile.png'
import arrow from './arrow.png'
import header from './header.png'
import appointment_img from './appointment_img.png'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'

export const assets = {
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    logo,
    profile,
    dropdown,
    group_profile,
    arrow,
    header,
    appointment_img,
    verified_icon,
    info_icon
}

export const specialityData = [
    {
        speciality: 'General practitioner',
        image: doc1
    },
    {
        speciality: 'Cardiology',
        image: doc2
    },
    {
        speciality: 'Neurology',
        image: doc3
    },
    {
        speciality: 'Behavior',
        image: doc4
    },
    {
        speciality: 'Surgery',
        image: doc5
    }
]

export const doctors = [
    {
        id: 'doc1',
        name: 'Bob Sponge',
        image: doc1,
        speciality: 'General practitioner',
        degree: 'DVM',
        experience: '3 years',
        about: 'Dr. Bob has a strong commitment to delivering comprehensive medical care',
        address:{
            line1: '124 Conch St',
            line2: 'Bikini Bottom, Marshall Islands'
        }
    },
    {
        id: 'doc2',
        name: 'Sandy Cheeks',
        image: doc2,
        speciality: 'Cardiology',
        degree: 'DVM',
        experience: '4 years',
        about: 'Dr. Sandy has a strong commitment to delivering comprehensive medical care',
        address:{
            line1: '126 Conch St',
            line2: 'Bikini Bottom, Marshall Islands'
        }
    },
    {
        id: 'doc3',
        name: 'Patrick Star',
        image: doc3,
        speciality: 'Neurology',
        degree: 'DVM',
        experience: '5 years',
        about: 'Dr. Patrick has a strong commitment to delivering comprehensive medical care',
        address:{
            line1: '120 Conch St',
            line2: 'Bikini Bottom, Marshall Islands'
        }
    },
    {
        id: 'doc4',
        name: 'Ward Squid',
        image: doc4,
        speciality: 'Behavior',
        degree: 'DVM',
        experience: '3 years',
        about: 'Dr. Squid has a strong commitment to delivering comprehensive medical care',
        address:{
            line1: '122 Conch St',
            line2: 'Bikini Bottom, Marshall Islands'
        }
    },
    {
        id: 'doc5',
        name: 'Pearl Krab',
        image: doc5,
        speciality: 'Surgery',
        degree: 'DVM',
        experience: '5 years',
        about: 'Dr. Krab has a strong commitment to delivering comprehensive medical care',
        address:{
            line1: '125 Conch St',
            line2: 'Bikini Bottom, Marshall Islands'
        }
    }
]