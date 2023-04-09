import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Input, Label, Menu, MenuItemProps } from 'semantic-ui-react';

function MenuExampleHeader() {
  const isMobile = useMediaQuery({ query: '(max-width: 796px)' });

  return (
    <>
      {!isMobile && <MenuExampleHeaderHorizontal />}
      {isMobile && <MenuExampleHeaderVertical />}
    </>
  );
}
export { MenuExampleHeader };

function MenuExampleHeaderVertical() {
  const [activeItem, setActiveItem] = useState<string>('home');
  function handleItemClick(
    // @ts-ignore
    event: MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps,
  ) {
    setActiveItem(data.name!);
  }

  return (
    <Menu vertical>
      <Menu.Item
        name="inbox"
        active={activeItem === 'inbox'}
        onClick={handleItemClick}
      >
        <Label color="teal">1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item
        name="spam"
        active={activeItem === 'spam'}
        onClick={handleItemClick}
      >
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item
        name="updates"
        active={activeItem === 'updates'}
        onClick={handleItemClick}
      >
        <Label>1</Label>
        Updates
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu>
  );
}

function MenuExampleHeaderHorizontal() {
  const [activeItem, setActiveItem] = useState<string>('home');

  function handleItemClick(
    // @ts-ignore
    event: MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps,
  ) {
    setActiveItem(data.name!);
  }

  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
