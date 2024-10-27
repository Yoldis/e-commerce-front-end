

import { z } from 'zod'


export const loginSchema = z.object({
    email:z.string().email({message:"El email no es valido"}),
    password:z.string().min(6, {message:"El passoword debe tener minimo 6 caracteres"}),
})

export const registerSchema = z.object({
    name:z.string().min(4, {message:"El nombre debe tener minimo 4 caracteres"}),
    email:z.string().email({message:"El email no es valido"}),
    password:z.string().min(6, {message:"El passoword debe tener minimo 6 caracteres"}),
})