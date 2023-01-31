import { Request, Response } from "express";
import prisma from "../database/prismaClient";

export default class GetContactController {
  async all(request: Request, response: Response) {
    try {
      const contacts = await prisma.contact.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          phoneNumber: true,
        },
      });

      return response.status(200).json({ data: contacts });
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }

  async unique(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const contact = await prisma.contact.findUnique({
        where: { id: Number(id) },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          phoneNumber: true,
        },
      });

      return response.status(200).json({ data: contact });
    } catch (e) {
      return response
        .status(404)
        .json({ error: `Could not find contact id: ${id}` });
    }
  }
}
