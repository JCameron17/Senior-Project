import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';


async function searchNews(q) {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "ff7bcb453cmshb295fe34a439beap123dfdjsn5505478cc19d",
        "x-bingapis-sdk": "true"
      }
    });
    const body = await response.json();
    return body.value;
}
function App() 
{
    const [query, setQuery] = React.useState("docker");
    const [list, setList] = React.useState(null);
    const search = (e) => 
  {
      e.preventDefault();
      searchNews(query).then(setList);
    };
    return (
      <div className="app">
        <form onSubmit={search}>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
        {!list
          ? null
          : list.length === 0
            ? <p><i>No results</i></p>
            : <ul>
              {list.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </ul>
        }
      </div>
    );
  }
  function Item({ item }) {
    const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
      <li className="item">
        {item.image &&
          <img className="thumbnail"
            alt=""
            src={item.image?.thumbnail?.contentUrl}
          />
        }
        <h2 className="title">
          <a href={item.url}>{item.name}</a>
        </h2>
        <p className="description">
          {item.description}
        </p>
        <div className="meta">
          <span>{formatDate(item.datePublished)}</span>
          <span className="provider">
            {item.provider[0].image?.thumbnail &&
              <img className="provider-thumbnail"
                alt=""
                src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
              />
            }
            {item.provider[0].name}
          </span>
          {item.category &&
            <span>{separateWords(item.category)}</span>
          }
        </div>
      </li>
    );
  }

// export default function App() 
// {
//   const handlePress = () => console.log("Text was clicked");
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
        
//         <View style={{ alignSelf: "center" }}>
//           <View style={styles.profileImage}>
//             <Image source={require("./assets/adaptive-icon.png")} style={styles.image} resizeMode="center"></Image>
//           </View>
//         </View>

//         <View style={styles.infoContainer}>
//           <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Julie</Text>
//           <Text style={[styles.text, { color: "black", fontSize: 14 }]}>Photographer</Text>
//         </View>

//         <View style={styles.statsContainer}>
//           <View style={styles.statsBox}>
//             <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
//             <Text style={[styles.text, styles.subText]}>Posts</Text>
//           </View>

//           <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 3, borderRightWidth: 3 }]}>
//             <Text style={[styles.text, { fontSize: 24 }]}>455</Text>
//             <Text style={[styles.text, styles.subText]}>Followers</Text>
//           </View>
        
//           <View style={styles.statsBox}>
//             <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
//             <Text style={[styles.text, styles.subText]}>Following</Text>
//           </View>
//         </View>

//         <View style={{ marginTop: 32 }}>
//           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             <View style={styles.mediaImageContainer}>
//               <Image source={require("./assets/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
//             </View>
//             <View style={styles.mediaImageContainer}>
//               <Image source={require("./assets/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
//             </View>
//             <View style={styles.mediaImageContainer}>
//               <Image source={require("./assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
//             </View>
//           </ScrollView>
//           <View style={styles.mediaCount}>
//             <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
//             <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Media</Text>
//           </View>
//         </View>  
                 
      
//         <StatusBar style="auto" />
      
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: 
  {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  
  image: 
  {
    flex: 1,
    height: undefined,
    width: undefined
  },

  infoContainer: 
  {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  text: 
  {
    color: "black"
  },
  statsContainer: 
  {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: 
  {
  alignItems: "center",
  flex: 1,
  
  },
  subText: 
  {
    fontSize: 14,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  mediaImageContainer: 
  {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: 
  {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: 
  {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  }
});
