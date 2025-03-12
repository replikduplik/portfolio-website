import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-16">
      <div className="max-w-4xl w-full mx-auto text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="flex gap-6">
            {/* Name and Email Container */}
            <div className="flex flex-col space-y-6 flex-1">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message Container */}
            <div className="flex-1 flex flex-col">
              <Label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                className="w-full flex-1 px-4 py-2 bg-white/10 border border-gray-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></Textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
