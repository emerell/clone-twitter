import React from 'react'

import { Edit, SimpleForm, TextInput, required, email } from 'react-admin'

import { requiredFieldValidation } from '@/shared/validators'

const emailValidation = [required(), email()]

export default function UsersEdit(props) {
  return (
    <Edit {...props} title="Edit User">
      <SimpleForm>
        <div>
          <TextInput
            source="firstName"
            label="First name"
            validate={requiredFieldValidation}
          />

          <TextInput
            source="lastName"
            label="Last name"
            validate={requiredFieldValidation}
          />

          <TextInput source="email" label="Email" validate={emailValidation} />

          <TextInput
            source="username"
            label="Username"
            validate={requiredFieldValidation}
          />
        </div>
      </SimpleForm>
    </Edit>
  )
}
