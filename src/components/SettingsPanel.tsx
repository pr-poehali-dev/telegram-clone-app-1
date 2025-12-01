import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel = ({ onClose }: SettingsPanelProps) => {
  const [currentView, setCurrentView] = useState<'main' | 'notifications' | 'privacy' | 'data' | 'chat' | 'folders' | 'devices' | 'language'>('main');
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [previewEnabled, setPreviewEnabled] = useState(true);
  const [inAppSounds, setInAppSounds] = useState(true);
  const [vibration, setVibration] = useState(true);
  const [autoDownload, setAutoDownload] = useState(true);
  const [autoPlayGifs, setAutoPlayGifs] = useState(true);
  const [autoPlayVideos, setAutoPlayVideos] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState([16]);
  const [chatBackground, setChatBackground] = useState(true);

  const renderMain = () => (
    <div className="space-y-1">
      <button
        onClick={() => {}}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <Avatar className="w-16 h-16">
          <AvatarImage src="" />
          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
            ВЫ
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-lg">Ваше имя</h3>
          <p className="text-sm text-muted-foreground">+7 999 123-45-67</p>
        </div>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <Separator className="my-2" />

      <button
        onClick={() => setCurrentView('notifications')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
          <Icon name="Bell" size={20} className="text-destructive" />
        </div>
        <span className="flex-1 text-left font-medium">Уведомления и звуки</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('privacy')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
          <Icon name="Lock" size={20} className="text-green-500" />
        </div>
        <span className="flex-1 text-left font-medium">Конфиденциальность</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('data')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
          <Icon name="Database" size={20} className="text-green-500" />
        </div>
        <span className="flex-1 text-left font-medium">Данные и память</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('chat')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="MessageCircle" size={20} className="text-primary" />
        </div>
        <span className="flex-1 text-left font-medium">Настройки чатов</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('folders')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon name="Folder" size={20} className="text-accent" />
        </div>
        <span className="flex-1 text-left font-medium">Папки</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('devices')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
          <Icon name="Smartphone" size={20} className="text-secondary" />
        </div>
        <span className="flex-1 text-left font-medium">Устройства</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button
        onClick={() => setCurrentView('language')}
        className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon name="Globe" size={20} className="text-accent" />
        </div>
        <span className="flex-1 text-left font-medium">Язык</span>
        <span className="text-muted-foreground">Русский</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <Separator className="my-2" />

      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="Star" size={20} className="text-primary" />
        </div>
        <span className="flex-1 text-left font-medium">Telegram Premium</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon name="HelpCircle" size={20} className="text-accent" />
        </div>
        <span className="flex-1 text-left font-medium">Помощь</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>

      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <Icon name="Info" size={20} className="text-muted-foreground" />
        </div>
        <span className="flex-1 text-left font-medium">Вопросы о Telegram</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">ОПОВЕЩЕНИЯ ДЛЯ ВСЕХ ЧАТОВ</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="notifications" className="cursor-pointer font-medium">
              Уведомления
            </Label>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="preview" className="cursor-pointer font-medium">
              Предпросмотр сообщений
            </Label>
            <Switch
              id="preview"
              checked={previewEnabled}
              onCheckedChange={setPreviewEnabled}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">ЗВУКИ</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="sound" className="cursor-pointer font-medium">
              Звук уведомлений
            </Label>
            <Switch
              id="sound"
              checked={soundEnabled}
              onCheckedChange={setSoundEnabled}
            />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="inapp" className="cursor-pointer font-medium">
              Звуки в приложении
            </Label>
            <Switch
              id="inapp"
              checked={inAppSounds}
              onCheckedChange={setInAppSounds}
            />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="vibration" className="cursor-pointer font-medium">
              Вибрация
            </Label>
            <Switch
              id="vibration"
              checked={vibration}
              onCheckedChange={setVibration}
            />
          </div>
        </div>
      </div>

      <Separator />

      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
        <span className="font-medium">Личные чаты</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>
      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
        <span className="font-medium">Группы</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>
      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
        <span className="font-medium">Каналы</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">КОНФИДЕНЦИАЛЬНОСТЬ</h3>
        <div className="space-y-1">
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Номер телефона</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Никто</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Последняя активность</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Все</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Фото профиля</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Все</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Звонки</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Все</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Пересылка сообщений</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Все</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">БЕЗОПАСНОСТЬ</h3>
        <div className="space-y-1">
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Код-пароль</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Двухэтапная аутентификация</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Активные сеансы</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderData = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">АВТОЗАГРУЗКА МЕДИА</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="autodownload" className="cursor-pointer font-medium">
              Автозагрузка медиа
            </Label>
            <Switch
              id="autodownload"
              checked={autoDownload}
              onCheckedChange={setAutoDownload}
            />
          </div>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">В мобильной сети</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Через Wi-Fi</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">В роуминге</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">ИСПОЛЬЗОВАНИЕ ПАМЯТИ</h3>
        <div className="space-y-1">
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Использование памяти</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">2.4 ГБ</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Использование сети</span>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">АВТОВОСПРОИЗВЕДЕНИЕ</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="gifs" className="cursor-pointer font-medium">
              GIF-анимации
            </Label>
            <Switch
              id="gifs"
              checked={autoPlayGifs}
              onCheckedChange={setAutoPlayGifs}
            />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="videos" className="cursor-pointer font-medium">
              Видео
            </Label>
            <Switch
              id="videos"
              checked={autoPlayVideos}
              onCheckedChange={setAutoPlayVideos}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">ВНЕШНИЙ ВИД</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="darkmode" className="cursor-pointer font-medium">
              Ночной режим
            </Label>
            <Switch
              id="darkmode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
          <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
            <span className="font-medium">Цветовая тема</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Синяя</span>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </button>
          <div className="flex items-center justify-between p-4 hover:bg-muted rounded-xl">
            <Label htmlFor="background" className="cursor-pointer font-medium">
              Фон чата
            </Label>
            <Switch
              id="background"
              checked={chatBackground}
              onCheckedChange={setChatBackground}
            />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground px-4">РАЗМЕР ТЕКСТА</h3>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm">Aa</span>
            <span className="text-2xl">Aa</span>
          </div>
          <Slider
            value={fontSize}
            onValueChange={setFontSize}
            min={12}
            max={24}
            step={1}
            className="w-full"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Пример текста сообщения в чате при выбранном размере шрифта
          </p>
        </div>
      </div>

      <Separator />

      <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
        <span className="font-medium">Стикеры и эмодзи</span>
        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
      </button>
    </div>
  );

  const getTitle = () => {
    switch (currentView) {
      case 'notifications': return 'Уведомления';
      case 'privacy': return 'Конфиденциальность';
      case 'data': return 'Данные и память';
      case 'chat': return 'Настройки чатов';
      case 'folders': return 'Папки';
      case 'devices': return 'Устройства';
      case 'language': return 'Язык';
      default: return 'Настройки';
    }
  };

  return (
    <div className="w-96 border-l border-border bg-card flex flex-col h-screen">
      <div className="p-4 border-b border-border flex items-center gap-3">
        {currentView !== 'main' && (
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            onClick={() => setCurrentView('main')}
          >
            <Icon name="ArrowLeft" size={20} />
          </Button>
        )}
        <h2 className="text-lg font-bold flex-1">{getTitle()}</h2>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full"
          onClick={onClose}
        >
          <Icon name="X" size={20} />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {currentView === 'main' && renderMain()}
          {currentView === 'notifications' && renderNotifications()}
          {currentView === 'privacy' && renderPrivacy()}
          {currentView === 'data' && renderData()}
          {currentView === 'chat' && renderChat()}
          {currentView === 'folders' && (
            <div className="p-4 text-center text-muted-foreground">
              Здесь будут ваши папки для организации чатов
            </div>
          )}
          {currentView === 'devices' && (
            <div className="space-y-2">
              <div className="p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                  <div className="flex-1">
                    <h4 className="font-semibold">Это устройство</h4>
                    <p className="text-sm text-muted-foreground">Chrome, Windows</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Активно</p>
              </div>
            </div>
          )}
          {currentView === 'language' && (
            <div className="space-y-1">
              <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
                <span className="font-medium">Русский</span>
                <Icon name="Check" size={20} className="text-primary" />
              </button>
              <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
                <span className="font-medium">English</span>
              </button>
              <button className="w-full p-4 hover:bg-muted rounded-xl transition-colors flex items-center justify-between">
                <span className="font-medium">Українська</span>
              </button>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SettingsPanel;
