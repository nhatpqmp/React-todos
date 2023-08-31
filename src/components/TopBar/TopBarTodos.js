import {TopBar, Frame, Page} from '@shopify/polaris';
import {ArrowLeftMinor} from '@shopify/polaris-icons';
import React, {useState, useCallback} from 'react';
import ResourceItemTodos from "../ResourceItem/ResourceItemTodos";

function TopBarTodos() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleIsUserMenuOpen = useCallback(
        () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
        [],
    );

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
    }, []);

    const logo = {
        width: 124,
        topBarSource:
            'https://static.ybox.vn/2023/6/4/1687398589085-Logo-Avada-New-trennensang.png',
        url: '#',
        accessibilityLabel: 'Jaded Pixel',
    };

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
                },
                {
                    items: [{content: 'Community forums'}],
                },
            ]}
            name="Dharma"
            detail="Jaded Pixel"
            initials="D"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={userMenuMarkup}
            onNavigationToggle={handleNavigationToggle}
        />
    );

    return (
            <div style={{height: '250px'}}>
                <Frame topBar={topBarMarkup} logo={logo} >
                    <Page>
                        <ResourceItemTodos></ResourceItemTodos>
                    </Page>
                </Frame>
            </div>
    );
}


export default TopBarTodos;