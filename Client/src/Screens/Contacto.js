import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Formik } from 'formik';


export const Contacto = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.formulario}> Formulario de Contacto </Text>
            <Formik
                validateOnMount={true}
                initialValues={{ nombresyapellidos: '', email: '', telefono: '', mensaje: '' }}
                onSubmit={values => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                }) => (
                    <>

                        <TextInput style={styles.nombresyapellidos}
                            placeholder="Nombres y Apellidos"
                            onChangeText={handleChange('nombresyapellidos')}
                            onBlur={handleBlur('nombresyapellidos')}
                            value={values.nombresyapellidos}
                            keyboardType="default" />

                        {(errors.nombresyapellidos && touched.nombresyapellidos) &&
                            <Text style={styles.errorText}>{errors.nombresyapellidos}</Text>
                        }

                        <TextInput style={styles.email}
                            placeholder="micorreo@micorreo.com"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address" />

                        {(errors.email && touched.email) &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        }

                        <TextInput style={styles.telefono}
                            placeholder="Nro. de Tel??fono"
                            onChangeText={handleChange('telefono')}
                            onBlur={handleBlur('telefono')}
                            value={values.telefono}
                            keyboardType="number-pad" />

                        {(errors.telefono && touched.telefono) &&
                            <Text style={styles.errorText}>{errors.telefono}</Text>
                        }

                        <TextInput style={styles.mensaje}
                            onChangeText={handleChange('mensaje')}
                            onBlur={handleBlur('mensaje')}
                            value={values.mensaje}
                            keyboardType="default"
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Ingresa tu Mensaje" />

                        {(errors.mensaje && touched.mensaje) &&
                            <Text style={styles.errorText}>{errors.mensaje}</Text>
                        }

                        <TouchableOpacity
                            style={styles.colorBtn}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.colorTxtBtn}>Aceptar</Text>
                        </TouchableOpacity>

                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 6,
        flexDirection:'column',
        backgroundColor: '#FFA983'
    },
    formulario: {
        color: Colors.black,
        fontSize: 18,
        marginTop: 20,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'center',
    },
    nombresyapellidos: {
        color: Colors.dark,
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.black,
        paddingRight: 12,
    },
    email: {
        color: Colors.dark,
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.black,
        paddingRight: 12,
    },
    telefono: {
        color: Colors.dark,
        fontSize: 18,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.black,
        paddingRight: 12,
    },
    mensaje: {
        color: Colors.dark,
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '600',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.black,
        paddingRight: 12,
    },
    colorBtn: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 10,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 7,
    },
    colorTxtBtn: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }

});