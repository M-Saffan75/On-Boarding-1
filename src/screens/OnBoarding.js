import React from 'react';
import { StyleSheet, View , StatusBar, Text , Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Colors from './Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes assignments, quizzes and more',
    image: require('../images/star.png'),
    backgroundColor:'#000',
  },
  {
    title: 'Stay on top of your education',
    text: 'Schedule your classes assignments, quizzes and more',
    image: require('../images/star.png'),
    backgroundColor:'#000',
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Schedule your classes assignments, quizzes and more',
    image: require('../images/star.png'),
    backgroundColor:'#000',
  },
];

const OnBoard = (props) => {
  const renderItem = ({item}) => {
    return(
      <View style={styles.slide}>
        <Image style={styles.img} source={item.image}/>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  }


  const keyExtractor = (item) => item.title;
  

  const renderDoneButton = () => {
    return (
      <View style={styles.donebtnwrapper}>
        <Text style={styles.donebtn}>Done <FontAwesome5 name={'angle-right'} size={13} style={styles.icon}/></Text>
      </View>
    );
  }
  
  const renderNextButton = () => {
      return (
        <View style={styles.nextbtnwrapper}>
          <Text style={styles.nextbtn}>Next</Text>
        </View>
      );
  }

  const renderPrevButton = () => {
    return (
      <View style={styles.prevbtnwrapper}>
        <Text style={styles.prevbtn}>Prev</Text>
      </View>
    );
  }

  const handleDone = () => {
    props.handleDone()
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider keyExtractor={keyExtractor} renderItem={renderItem} renderDoneButton={renderDoneButton} renderNextButton={renderNextButton} renderPrevButton={renderPrevButton} 
      showPrevButton dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle} onDone={handleDone} data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  slide : {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
  },

  img : { 
    marginVertical:60,
    marginHorizontal:60,
  },

  title :{
    fontSize:24,
    color:Colors.black,
    textAlign:'center',
    fontWeight:'bold',
    marginHorizontal:60,
    fontFamily:'Poppins-SemiBold',
  },  
  text : {
    fontSize:15,
    color:Colors.black,
    padding:20,
    marginHorizontal:60,
    textAlign:'center',
    fontFamily:'Poppins-SemiBold',
  },

  donebtnwrapper: {
    height:45,
    backgroundColor:'#7b9ff2',
    paddingRight:20,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    paddingHorizontal:30,
    borderBottomLeftRadius:25,
    borderTopLeftRadius:25,
    position:'absolute',
    right:-16,
    
  },
  nextbtnwrapper: {
    height:40,
    width:40,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
  },
  prevbtnwrapper: {
    height:40,
    width:40,
    marginLeft:20,
    alignItems:'center',
    justifyContent:'center',
  },

  nextbtn: {
    color:Colors.blue,
    fontWeight:'500',
    letterSpacing:.5,
  },

  donebtn: {
    color:Colors.blue,
    fontWeight:'500',
    letterSpacing:.5,
    color:'#fff',
    width:50,
  },

  prevbtn: {
    color:Colors.blue,
    fontWeight:'500',
    letterSpacing:.5,
  },

  dotStyle : {
    backgroundColor:Colors.bluefaded,
  },

  activeDotStyle : {
    backgroundColor:Colors.blue,
  },

});

export default OnBoard;
