import { Request, Response } from 'express';
import prisma from '../database/prismaClient';

export default class UpdateContactController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;
    const { firstName, lastName, phoneNumber } = request.body;

    try {
      const contact = await prisma.contact.update({
        where: { id: Number(id) },
        data: { firstName, lastName, phoneNumber }
      })

      return response.status(201).json(contact);
    } catch (e) {
      return response.status(404).json({ error: `Did not found contact id: ${id}.` })
    }
  }
};