import React from 'react';

const About = () => {
    return (
        <div className='h-screen'>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Welcome to our Doctor's Portal</h1>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 className='font-bold'>What features do I still have access to in new Pages?</h2>
                    <p>You will still have access to the following features: Feed, Instagram account linking, advertising, monetisation, followers, insights, tools (such as Inbox, Stories, Groups, events), blue badge, and Page management by multiple people. See more available features.</p>
                </div>
                <div>
                    <h2 className='font-bold'>Who can manage my business presence with new Pages?</h2>
                    <p>You can give Facebook access to people you trust to manage your new Page. This is similar to sharing admin access on classic Pages. Learn how to give Facebook access of your new Page.</p>
                </div>
                <div>
                    <h2 className='font-bold'>How can I open my new Page?</h2>
                    <div>
                        <ul>
                            <li>1) To open your new Page on desktop: From your home page, click on your profile picture in the top right. Select Switch Profile and select the new Page.</li>
                            <li>2) To open your new Page on mobile: From the Facebook app, tap on your profile picture in the bottom right. Tap on the new Page.</li>
                            <li>3) To switch back to your profile on desktop: From your new Page's Feed, click , select Switch profile and select your profile.</li>
                            <li>4) To switch back to your profile on mobile: From your new Page's Feed, tap, tap ... and select your profile.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>What will happen to posts that I made on my classic Page?</h2>
                    <p>All of your previous posts will be preserved on your Page, and insights will still be available for them.</p>
                </div>
                <div>
                    <h2 className='font-bold'>Is there any content that won't migrate with my Page?</h2>
                    <p>Information on your classic Page, such as contact info, may not transition. Your bio may need to be shortened. You can edit this information by going into your About section and editing the relevant fields.</p>
                </div>
            </div>
        </div>
    );
};

export default About;