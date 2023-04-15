import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '../../lib/supabaseClient';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({"test":"ok"});
      break;
      
    case 'POST':
      const newProject = req.body;

      const { data, error } = await supabase.from('project').insert(newProject);

      if (error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(201).json(data);
      }
      break;


      
    case 'PUT':
      const updatedProject = req.body;
      const { data: updatedData, error: updateError } = await supabase
        .from('project')
        .update(updatedProject)
        .match({ id: updatedProject.id });

      if (updateError) {
        res.status(400).json({ message: updateError.message });
      } else {
        res.status(200).json(updatedData);
      }
      break;

    case 'DELETE':
      const { id } = req.query;
      const { data: deletedData, error: deleteError } = await supabase
        .from('project')
        .delete()
        .match({ id });

      if (deleteError) {
        res.status(400).json({ message: deleteError.message });
      } else {
        res.status(200).json(deletedData);
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
