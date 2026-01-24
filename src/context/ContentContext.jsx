import React, { createContext, useState, useEffect, useContext } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const initialEvents = [
    {
        id: 1,
        title: "Iron Hill Market",
        date: "Oct 15 - Oct 17, 2026",
        location: "Black Rock Canyon, AZ",
        description: "The largest gathering of desert smiths. We will be unveiling our new Obsidian Collection.",
        link: "#"
    },
    {
        id: 2,
        title: "Winter Solstice Forge",
        date: "Dec 21, 2026",
        location: "The Deep Hall (Virtual Event)",
        description: "A live streaming event from our main forge. Watch Thane Ironfoot craft a masterwork blade in real-time.",
        link: "#"
    },
    {
        id: 3,
        title: "Spring Trade Fair",
        date: "March 10, 2027",
        location: "New Reno Outpost",
        description: "Pre-orders for the 'Sun-Touched' armor sets will open. Early access for clan members.",
        link: "#"
    }
];

const initialClanSettings = {
    instagramEmbed: '',
    facebookEmbed: ''
};

const initialClanPosts = [
    {
        id: 1,
        title: "The First Anvil",
        content: "Before there was the Mountain, there was the Anvil. It fell from the stars...",
        image: "",
        date: "Jan 01, 2026"
    }
];

const initialMakers = [
    {
        id: 1,
        name: "Thane Ironfoot",
        role: "Master Smith",
        bio: "Expert in high-carbon steel and meteorite alloys. He has forged blades for kings and shackles for beasts.",
        icon: "hammer"
    },
    {
        id: 2,
        name: "Duna Stoneheart",
        role: "Rune Scribe",
        bio: "Keeper of the archives and master of protective sigils. Every shield bears her mark.",
        icon: "users"
    }
];


const initialPageHeaders = {
    home: { image: '/heroheaderfull.png?v=2' },
    shop: { image: '/header_shop.png' }, // Placeholder default
    about: { image: '/header_about.png' } // Placeholder default
};

export const ContentProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [clanSettings, setClanSettings] = useState(initialClanSettings);
    const [clanPosts, setClanPosts] = useState([]);

    const [makers, setMakers] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [newsletters, setNewsletters] = useState([]);
    const [pageHeaders, setPageHeaders] = useState(initialPageHeaders);

    useEffect(() => {
        // Load Events
        const storedEvents = localStorage.getItem('dwarf_events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        } else {
            setEvents(initialEvents);
            localStorage.setItem('dwarf_events', JSON.stringify(initialEvents));
        }

        // Load Clan Settings
        const storedSettings = localStorage.getItem('dwarf_clan_settings');
        if (storedSettings) {
            setClanSettings(JSON.parse(storedSettings));
        } else {
            setClanSettings(initialClanSettings);
            localStorage.setItem('dwarf_clan_settings', JSON.stringify(initialClanSettings));
        }

        // Load Clan Posts
        const storedPosts = localStorage.getItem('dwarf_clan_posts');
        if (storedPosts) {
            setClanPosts(JSON.parse(storedPosts));
        } else {
            setClanPosts(initialClanPosts);
            localStorage.setItem('dwarf_clan_posts', JSON.stringify(initialClanPosts));
        }

        // Load Makers
        const storedMakers = localStorage.getItem('dwarf_makers');
        if (storedMakers) {
            setMakers(JSON.parse(storedMakers));
        } else {
            setMakers(initialMakers);
            localStorage.setItem('dwarf_makers', JSON.stringify(initialMakers));
        }

        // Load Subscribers
        const storedSubscribers = localStorage.getItem('dwarf_subscribers');
        if (storedSubscribers) {
            setSubscribers(JSON.parse(storedSubscribers));
        } else {
            setSubscribers([]);
            localStorage.setItem('dwarf_subscribers', JSON.stringify([]));
        }

        // Load Newsletters
        const storedNewsletters = localStorage.getItem('dwarf_newsletters');
        if (storedNewsletters) {
            setNewsletters(JSON.parse(storedNewsletters));
        } else {
            setNewsletters([]);
            localStorage.setItem('dwarf_newsletters', JSON.stringify([]));
        }

        // Load Page Headers
        const storedHeaders = localStorage.getItem('dwarf_page_headers');
        if (storedHeaders) {
            setPageHeaders(JSON.parse(storedHeaders));
        } else {
            setPageHeaders(initialPageHeaders);
            localStorage.setItem('dwarf_page_headers', JSON.stringify(initialPageHeaders));
        }
    }, []);

    const addEvent = (newEvent) => {
        const updatedEvents = [...events, { ...newEvent, id: Date.now() }];
        setEvents(updatedEvents);
        localStorage.setItem('dwarf_events', JSON.stringify(updatedEvents));
    };

    const removeEvent = (id) => {
        const updatedEvents = events.filter(e => e.id !== id);
        setEvents(updatedEvents);
        localStorage.setItem('dwarf_events', JSON.stringify(updatedEvents));
    };

    const updateClanSettings = (newSettings) => {
        setClanSettings(newSettings);
        localStorage.setItem('dwarf_clan_settings', JSON.stringify(newSettings));
    };

    const addClanPost = (newPost) => {
        const updatedPosts = [{ ...newPost, id: Date.now() }, ...clanPosts];
        setClanPosts(updatedPosts);
        localStorage.setItem('dwarf_clan_posts', JSON.stringify(updatedPosts));
    };

    const removeClanPost = (id) => {
        const updatedPosts = clanPosts.filter(p => p.id !== id);
        setClanPosts(updatedPosts);
        localStorage.setItem('dwarf_clan_posts', JSON.stringify(updatedPosts));
    };

    // Makers Functions
    const addMaker = (newMaker) => {
        const updatedMakers = [...makers, { ...newMaker, id: Date.now() }];
        setMakers(updatedMakers);
        localStorage.setItem('dwarf_makers', JSON.stringify(updatedMakers));
    };

    const removeMaker = (id) => {
        const updatedMakers = makers.filter(m => m.id !== id);
        setMakers(updatedMakers);
        localStorage.setItem('dwarf_makers', JSON.stringify(updatedMakers));
    };

    // Newsletter Functions
    const addSubscriber = (email) => {
        if (!subscribers.includes(email)) {
            const updatedSubscribers = [...subscribers, email];
            setSubscribers(updatedSubscribers);
            localStorage.setItem('dwarf_subscribers', JSON.stringify(updatedSubscribers));
        }
    };

    const addNewsletter = (newsletter) => {
        const updatedNewsletters = [{ ...newsletter, id: Date.now(), date: new Date().toLocaleDateString() }, ...newsletters];
        setNewsletters(updatedNewsletters);
        localStorage.setItem('dwarf_newsletters', JSON.stringify(updatedNewsletters));
    };

    const updatePageHeader = (pageKey, newConfig) => {
        const updatedHeaders = { ...pageHeaders, [pageKey]: { ...pageHeaders[pageKey], ...newConfig } };
        setPageHeaders(updatedHeaders);
        localStorage.setItem('dwarf_page_headers', JSON.stringify(updatedHeaders));
    };

    return (
        <ContentContext.Provider value={{
            events, addEvent, removeEvent,
            clanSettings, updateClanSettings,
            clanPosts, addClanPost, removeClanPost,
            makers, addMaker, removeMaker,
            subscribers, addSubscriber,
            newsletters, addNewsletter,
            pageHeaders, updatePageHeader
        }}>
            {children}
        </ContentContext.Provider>
    );
};
