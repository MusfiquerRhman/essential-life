import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/logo.svg';
import './sidebar.scss';

const Divider = ({text}) => (
    <div className='divider'>
        <p className='divider__text'>{text}</p>
        <hr/>
    </div>
)

const CustomNavLinks = ({text, link}) => (
    <NavLink to={link} className={`sidebar__link  ${(navData) => (navData.isActive ? "active" : '')}`}>
        <span className='sidebar__link--text'>{text}</span>
    </NavLink>
)


const Sidebar = React.memo(({ children }) => {
    return (
        <div className='container'>
            <div className='sidebar__container'>
                <div className='sidebar__logo'>
                    <img src={logo} alt='Essential life'/>
                </div>
                <div className='sidebar__links'>
                    <CustomNavLinks link='/' text="Dashboard"/>

                    <Divider text="User Generated Contents"/>
                    <CustomNavLinks link="/ugcrecipes/private" text="UGC Recipes (private)"/>
                    <CustomNavLinks link="/ugcrecipes/public" text="UGC Recipes" />
                    <CustomNavLinks link="/ugcremedies/private" text="UGC Remedies (private)" />
                    <CustomNavLinks link="/ugcremedies/public" text="UGC Remedies" />
                    <CustomNavLinks link="/content-suggestion" text="Content Suggestion" />

                    <Divider text="Body System"/>
                    <CustomNavLinks link="/ailments" text="Ailments"/>
                    <CustomNavLinks link="/body-system" text="Body System"/>
                    <CustomNavLinks link="/remedies" text="Remedies"/>
                    <CustomNavLinks link="/symptoms" text="Symptoms"/>

                    <Divider text="Dashboard"/>
                    <CustomNavLinks link="/cards" text="Cards" />

                    <Divider text="Categories"/>
                    <CustomNavLinks link="/categories" text="Categories" />
                    <CustomNavLinks link="/recipes" text="Recipes" />

                    <Divider text="Solutions"/>
                    <CustomNavLinks link="/blends" text="Blends" />
                    <CustomNavLinks link="/oil" text="Oil" />
                    <CustomNavLinks link="/supplements" text="Supplements" />

                    <Divider text="Tags"/>
                    <CustomNavLinks link="/constituents" text="Constituents" />
                    <CustomNavLinks link="/properties" text="Properties" />

                    <Divider text="Users"/>
                    <CustomNavLinks link="/avaters" text="Avaters" />
                    <CustomNavLinks link="/users" text="Users" />

                    <Divider text="Others"/>
                    <CustomNavLinks link="/global-status" text="Global Status" />
                    <CustomNavLinks link="/seed-download" text="Seed Download" />
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
})

export default Sidebar