import React from 'react';
import { Layout, Flex } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { Content } = Layout;

const layoutStyle: React.CSSProperties = {
  //borderRadius: 8,
  overflow: 'auto', 
  width: '100%',
  maxWidth: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  //overflow: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
};

interface CustomLayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header/>
      <Content style={contentStyle}>{children}</Content>
      <Footer/>
    </Layout>
  </Flex>
);

export default CustomLayout;
