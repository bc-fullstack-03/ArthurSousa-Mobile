import { Envelope, Lock } from 'phosphor-react-native'
import React from 'react'
import { Image, KeyboardAvoidingView, Platform } from 'react-native'
import colors from 'tailwindcss/colors'
import logo from "../assets/logo.png"
import { Button } from './Button'
import { Heading } from './Heading'
import { Input } from './Input'
import { Spacer } from './Spacer'


interface AuthFormProps{
  authSubFormTitle: string;
  submitFormButtonText: string;

}

export function AuthForm({ authSubFormTitle: authFormTitle, submitFormButtonText}: AuthFormProps) {
  return (
    <KeyboardAvoidingView
      className="  gap-2 items-center   mt-12"
      contentContainerStyle={{ alignItems: 'center', marginTop: 4, paddingBottom: 48 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
    >

      <Image source={logo} className="" resizeMethod="scale" />
      <Heading title="Sysmap Parrot" subtitle={authFormTitle} />

      <Input.Root>
        <Input.Incon>
          <Envelope color={colors.gray[500]} />
          <Input.Input placeholder="Digite seu e-mail." autoCapitalize='none' />
        </Input.Incon>
      </Input.Root>
      <Spacer />
      <Input.Root>
        <Input.Incon>
          <Lock color={colors.gray[500]} />
          <Input.Input
            placeholder="*******************"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
          />
        </Input.Incon>
      </Input.Root>
      <Spacer />

      <Button
        title={submitFormButtonText}
        onPress={() => { }}
      />
      {/* <Spacer /> */}
    </KeyboardAvoidingView>
  )
}

