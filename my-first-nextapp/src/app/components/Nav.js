import { color } from 'framer-motion'
import React from 'react'

const Nav = () => {
    const styles = {
        Nav: {
            display: "flex",
            height: "15vh",
            width: "auto",
        },
        navD13: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        navD2: {
            flex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        para: {
            fontSize: "1.7rem",
            fontWeight: 500,
            cursor: "default"
        },
        categoryContainer: {
            display: "flex",
            width: "75%",
            justifyContent: "space-between",
            alignItems: "center",
        },
        categories: {
            color: "black",
            fontSize: "1.4rem",
            fontWeight: 500,
            cursor: "pointer"
        },
        buy: {
            display: "flex",
            flexDirection: "column",
            width: "5rem",
            height: "5rem",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "rgb(255,158,121)",
            overflow: "hidden"
        },
        buyPara: {
            color:"black",
            fontSize: "1.3rem",
            fontWeight: "bold",
            cursor: "default"
        }

    }
    return (
        <div style={styles.Nav}>
            <div style={styles.navD13}>
                <div style={styles.buy}>
                    <p style={styles.buyPara}>Buy</p>
                    <p style={styles.buyPara}>Now</p>
                </div>
            </div>
            <div style={styles.navD2}>
                <div style={styles.categoryContainer}>
                    <p style={styles.categories}>About</p>
                    <p style={styles.categories}>Products</p>
                    <p style={styles.categories}>Gallery</p>
                    <p style={styles.categories}>Contact</p>
                </div>
            </div>
            <div style={{ ...styles.navD13, backgroundColor: "rgb(238,119,74)" }}>
                <p style={styles.para}>Grab Your Can</p>
            </div>
        </div>
    )
}
export default Nav