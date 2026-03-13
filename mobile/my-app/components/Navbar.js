import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    router.push('/');
  };

  const navigateTo = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  const isAdmin = user && user.role === 'admin';

  return (
    <View style={styles.navbar}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.logoContainer} 
          onPress={() => navigateTo('/')}
        >
          <Image 
            source={require('../assets/LEARNOVA.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.logoText}>
            <Text style={styles.logoLearn}>LEARN</Text>
            <Text style={styles.logoOva}>OVA</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => setIsOpen(!isOpen)}
        >
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigateTo('/')}
          >
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          {user ? (
            <>
              {isAdmin && (
                <TouchableOpacity 
                  style={[styles.menuItem, styles.adminButton]} 
                  onPress={() => navigateTo('/admin-dashboard')}
                >
                  <Text style={styles.adminButtonText}>Admin Dashboard</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity 
                style={[styles.menuItem, styles.logoutButton]} 
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigateTo('/auth/login')}
              >
                <Text style={styles.menuText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.menuItem, styles.signupButton]} 
                onPress={() => navigateTo('/auth/register')}
              >
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    flexDirection: 'row',
  },
  logoLearn: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002147',
  },
  logoOva: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C5A059',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#002147',
    borderRadius: 2,
  },
  menu: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  adminButton: {
    backgroundColor: '#002147',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    paddingVertical: 10,
  },
  adminButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    paddingVertical: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#C5A059',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 20,
    paddingVertical: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Navbar;
