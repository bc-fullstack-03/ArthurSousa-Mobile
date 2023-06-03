import { Envelope, Lock } from 'phosphor-react-native'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform } from 'react-native'
import colors from 'tailwindcss/colors'
import logo from "../assets/logo.png"
import { Auth } from '../types/Auth'
import { Button } from './Button'
import { Heading } from './Heading'
import { Input } from './Input'
import { Spacer } from './Spacer'


interface AuthFormProps {
  authSubFormTitle: string;
  submitFormButtonText: string;
  submitFormButtonAction: (auth: Auth) => void;

}

export function AuthForm({ authSubFormTitle: authFormTitle, submitFormButtonText, submitFormButtonAction }: AuthFormProps) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  return (
    <KeyboardAvoidingView
      className="  gap-2 items-center   mt-12"
      contentContainerStyle={{ alignItems: 'center', marginTop: 0, paddingBottom: 24}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
    >

      <Image source={logo} className="" resizeMethod="scale" />
      <Heading title="Sysmap Parrot" subtitle={authFormTitle} />

      <Input.Root>
        <Input.Incon>
          <Envelope color={colors.gray[500]} />
          <Input.Input
            value={user}
            onChangeText={setUser}
            placeholder="Digite seu e-mail."
            autoCapitalize='none'
          />
        </Input.Incon>
      </Input.Root>

      <Spacer />

      <Input.Root>
        <Input.Incon>
          <Lock color={colors.gray[500]} />
          <Input.Input
            value={password}
            onChangeText={setPassword}
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
        onPress={() => {
          submitFormButtonAction({
            user, password
          })
        }}
      />
      {/* <Spacer /> */}
    </KeyboardAvoidingView>
  )
}

