
import React from 'react';
import { Text, View ,TextInput, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
export  function Home() {

    const participants = ['Rodrigo','Vini','Airton','Roberto','Jessica','Luis','Kayke','Natalia','Bruna'];

  function handleParticipantAdd() {
      if(participants.includes("Rodrigo")){

        Alert.alert("Participante existe","Já existe um participante  na lista com esse nome..")
      }

  }
  function handleParticipantRemove(name : string) {
    Alert.alert("Remover",`Remover o participante ${name} ?`,[
      {
        text:'Sim',
        onPress:() => Alert.alert('deletado!')
      },
      {
        text:'Não',
        style:'cancel',
        onPress:() => Alert.alert('Operacao cancelada!')
      }
    ])
  }
 
  return (
    <View 
      style={styles.container}
    >
    <Text  
      style={styles.eventName}>
  Nome do Evento
  </Text>
  < Text style={styles.eventDate}> 
      Sexta,4 de novembro de 2022. 
    </Text>
    <View
      style={styles.form}
    >
    <TextInput 
      style={styles.input}
      placeholderTextColor="#6B6B6B"
      placeholder='Nome do participante'
    />
    <TouchableOpacity
      style={styles.button}
      onPress={handleParticipantAdd}
    >
        <Text
            style={styles.buttonText}
          >
          +
        </Text>
    </TouchableOpacity>
    </View>
    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
        key={item} 
        name={item} 
        onRemove={() => handleParticipantRemove(item)}
    />


      )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (

          <Text style={styles.listEmptyText}>
            Ninguém chegu no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
    />
  


</View>
  
  );
}